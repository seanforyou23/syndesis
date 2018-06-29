import { map } from 'rxjs/operators';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '@syndesis/ui/config.service';
import { log } from '@syndesis/ui/logging';
import {
  Activity,
  Integration,
  IntegrationDeployment,
  IntegrationSupportService,
  Step
} from '@syndesis/ui/platform';
import { PaginationConfig } from 'patternfly-ng';
import { Subscription, forkJoin } from 'rxjs';

@Component({
  selector: 'syndesis-integration-activity',
  templateUrl: './integration-activity.component.html',
  styleUrls: ['./integration-activity.component.scss'],
  exportAs: 'integrationActivity'
})
export class IntegrationActivityComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() integration: Integration;
  activities: Activity[] = [];
  onRefresh: boolean;
  onError: boolean;
  showPagination: boolean;
  openshiftConsoleURL: string;
  lastRefresh = new Date();
  paginationConfig: PaginationConfig = {
    pageSize: 15,
    pageSizeIncrements: [15, 40, 75]
  };

  selectedActivity: Activity;

  private allActivities: Activity[] = [];

  constructor(
    private integrationSupportService: IntegrationSupportService,
    private configService: ConfigService
  ) {}

  ngOnInit() {
    this.fetchActivities();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  fetchStepName(step: Step): string {
    let stepName = 'n/a';

    if (step) {
      const { name, action } = step;
      stepName = name || (action && action.name ? action.name : stepName);
    }

    return stepName;
  }

  fetchActivities(): void {
    if (!this.integration && !this.integration.id) {
      return;
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.onRefresh = true;
    this.onError = false;

    const activities$ = this.integrationSupportService.requestIntegrationActivity(
      this.integration.id
    );
    const integrationDeployments$ = this.integrationSupportService.getDeployments(
      this.integration.id
    );

    this.subscription = forkJoin<[Activity[], IntegrationDeployment[]]>([
      activities$,
      integrationDeployments$
    ])
      .pipe(
        map(results => {
          const activitities: any[] = results[0];
          const integrationDeployments: any[] = results[1];

          activitities.forEach(activity => {
            if (activity.steps && Array.isArray(activity.steps)) {
              activity.steps.forEach(step => {
                const deployedIntegrationStep = integrationDeployments
                  .find(deployment => deployment.version === +activity.ver)
                  .spec.steps.find(
                    integrationStep => integrationStep.id == step.id
                  );

                step.name = this.fetchStepName(deployedIntegrationStep);
                step.isFailed = step.failure && step.failure.length > 0;

                const errorMessages = [
                  null,
                  ...step.messages,
                  step.failure
                ].filter(messages => !!messages);
                step.output =
                  errorMessages.length > 0 ? errorMessages.join('\n') : null;
              });
            }
          });

          return activitities;
        })
      )
      .subscribe(
        activities => this.updateActivities(activities),
        error => this.handleError(error)
      );
  }

  renderActivitiesByPage(): void {
    const pageItemIndex =
      (this.paginationConfig.pageNumber - 1) * this.paginationConfig.pageSize;
    this.activities = this.allActivities.slice(
      pageItemIndex,
      pageItemIndex + this.paginationConfig.pageSize
    );
  }

  onSelectActivity(event: Event, activity: Activity): void {
    event.preventDefault();
    event.stopPropagation();
    this.selectedActivity =
      this.selectedActivity && this.selectedActivity.id === activity.id
        ? null
        : activity;
  }

  private updateActivities(activities: Activity[]): void {
    this.onRefresh = false;
    this.lastRefresh = new Date();

    const aggregatedActivities = [...activities, ...this.allActivities];
    this.allActivities = Array.from(
      new Set(aggregatedActivities.map(activity => activity.id))
    )
      .map(id => aggregatedActivities.find(activity => activity.id === id))
      .sort((activity1, activity2) => activity2.at - activity1.at);

    this.showPagination =
      this.allActivities.length > this.paginationConfig.pageSize;
    this.paginationConfig.totalItems = this.allActivities.length;
    this.paginationConfig.pageNumber = 1;

    this.openshiftConsoleURL = null;
    if (this.allActivities.length > 0) {
      const base = this.configService.getSettings('consoleUrl');
      const pod = this.allActivities[0].pod;
      const project = this.configService.getSettings('project');
      if (base && pod && project) {
        this.openshiftConsoleURL = `${base}/project/${project}/browse/pods/${pod}?tab=logs`;
      }
    }

    this.renderActivitiesByPage();
  }

  private handleError(error: Error): void {
    this.onRefresh = false;
    this.onError = true;
    log.error(
      `Error fetching activity records for integration ID ${
        this.integration.id
      }`,
      error
    );
  }
}
