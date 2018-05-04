import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RouterActionTypes, Go } from '../actions/routing';
import { Location } from '@angular/common';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RouteMgrEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$
    .ofType<Go>(RouterActionTypes.Go)
    .pipe(
      map(action => action.payload),
      tap(({ path, query: queryParams, extras }) =>
        this.router.navigate(path, { queryParams, ...extras })
      )
    );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$
    .ofType(RouterActionTypes.Back)
    .pipe(tap(() => this.location.back()));

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$
    .ofType(RouterActionTypes.Forward)
    .pipe(tap(() => this.location.forward()));

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}
