import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarModule } from 'patternfly-ng';

import { SyndesisCommonModule, NavigationService } from '@syndesis/ui/common';
import {
  CurrentFlowService,
  FlowViewComponent,
  FlowViewStepComponent,
  IntegrationEditPage
} from '@syndesis/ui/integration/edit-page';
import { ConnectionsListComponent } from '../../connections/list/list.component';
import { SyndesisStoreModule } from '@syndesis/ui/store';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule, PopoverModule } from 'ngx-bootstrap';

describe('IntegrationsEditComponent', () => {
  let component: IntegrationEditPage;
  let fixture: ComponentFixture<IntegrationEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CollapseModule,
        CommonModule,
        FormsModule,
        SyndesisCommonModule,
        ModalModule,
        RouterTestingModule.withRoutes([]),
        PopoverModule.forRoot(),
        CollapseModule.forRoot(),
        SyndesisStoreModule,
        ToolbarModule
      ],
      declarations: [
        IntegrationEditPage,
        ConnectionsListComponent,
        FlowViewComponent,
        FlowViewStepComponent
      ],
      providers: [CurrentFlowService, NavigationService]
    }).compileComponents();
  }));

  // TODO: Add separate test for editing
  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
