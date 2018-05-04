import { reducers } from './reducers';
import { RouteMgrEffects } from './effects/route-mgr-effects';
import { CustomRouterStateSerializer } from './models/serializer';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [CommonModule]
})
export class RouteMgrModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootRouteMgrModule
    };
  }
}

@NgModule({
  imports: [EffectsModule.forRoot([RouteMgrEffects])],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ]
})
export class RootRouteMgrModule {}
