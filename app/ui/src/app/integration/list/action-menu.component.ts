import { Component, Input, OnInit } from '@angular/core';
import {
  Integration,
  IntegrationActionsService,
  I18NService
} from '@syndesis/ui/platform';
import { Action, ActionConfig } from 'patternfly-ng';

@Component({
  selector: 'syndesis-integration-action-menu',
  template: `
    <ng-container *ngIf="actionConfig">
      <pfng-action class="list-pf-actions"
                  [config]="actionConfig"
                  (onActionSelect)="integrationActionsService.requestAction($event.id, integration)">
      </pfng-action>
    </ng-container>
  `
})
export class IntegrationActionMenuComponent implements OnInit {
  @Input() showViewAction = true;
  @Input() showPrimaryActions = false;
  @Input() integration: Integration;
  actionConfig: ActionConfig;

  constructor(
    public integrationActionsService: IntegrationActionsService,
    private i18NService: I18NService
  ) {}

  ngOnInit() {
    this.actionConfig = {
      primaryActions: [],
      moreActions: [],
      moreActionsDisabled: false,
      moreActionsVisible: true
    } as ActionConfig;
    if (this.showViewAction) {
      this.actionConfig.moreActions.push({
        id: 'view',
        title: this.i18NService.localize('view'),
        tooltip: this.i18NService.localize('view-thing', [
          this.integration.name
        ])
      });
    }
    if (!this.showPrimaryActions) {
      this.actionConfig.moreActions.push({
        id: 'edit',
        title: this.i18NService.localize('edit'),
        tooltip: this.i18NService.localize('edit-thing', [
          this.integration.name
        ])
      });
    }
    this.actionConfig.moreActions.push({
      id: 'publish',
      title: this.i18NService.localize('integrations.publish'),
      tooltip: this.i18NService.localize('integrations.publish-thing', [
        this.integration.name
      ]),
      visible: this.integrationActionsService.canActivate(this.integration)
    });
    this.actionConfig.moreActions.push({
      id: 'unpublish',
      title: this.i18NService.localize('integrations.unpublish'),
      tooltip: this.i18NService.localize('integrations.unpublish-thing', [
        this.integration.name
      ]),
      visible: this.integrationActionsService.canDeactivate(this.integration)
    });
    this.actionConfig.moreActions.push({
      id: 'delete',
      title: this.i18NService.localize('delete'),
      tooltip: this.i18NService.localize('delete-thing', [
        this.integration.name
      ])
    });
    if (!this.showPrimaryActions) {
      this.actionConfig.moreActions.push({
        id: 'export',
        title: this.i18NService.localize('export'),
        tooltip: this.i18NService.localize('export-thing', [
          this.integration.name
        ])
      });
    }
    if (this.showPrimaryActions) {
      this.actionConfig.primaryActions.push({
        id: 'export',
        styleClass: 'btn btn-default',
        title: this.i18NService.localize('export'),
        tooltip: this.i18NService.localize('export-thing', [
          this.integration.name
        ])
      });
      this.actionConfig.primaryActions.push({
        id: 'edit',
        styleClass: 'btn btn-primary',
        title: this.i18NService.localize('integrations.edit-integration'),
        tooltip: this.i18NService.localize('edit-thing', [
          this.integration.name
        ])
      });
    }
  }
}
