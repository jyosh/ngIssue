import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouteMgrModule, reducers } from '@cdIssue/route-mgr';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './reducers/meta-reducer';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    RouteMgrModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'module1', pathMatch: 'full' },
        { path: 'module1', loadChildren: '@cdIssue/module1#Module1Module' },
        { path: 'module2', loadChildren: '@cdIssue/module2#Module2Module' }
      ],
      { initialNavigation: 'enabled', preloadingStrategy: PreloadAllModules }
    )
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
