import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { platformReducer, PlatformEffects } from './types';
import { SYNDESIS_GUARDS } from './guards';

@NgModule({
  imports: [
    StoreModule.forRoot(platformReducer),
    EffectsModule.forRoot(PlatformEffects.rootEffects()),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 25 })
      : []
  ]
})
export class PlatformModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: PlatformModule
  ) {
    if (parentModule) {
      throw new Error(
        'PlatformModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): Array<ModuleWithProviders> {
    return [
      {
        ngModule: PlatformModule,
        providers: [...SYNDESIS_GUARDS]
      }
    ];
  }
}
