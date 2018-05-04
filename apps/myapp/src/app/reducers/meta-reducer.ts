import { environment } from './../../environments/environment';
import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromRouteMgr from '@cdIssue/route-mgr';

export const metaReducers: MetaReducer<fromRouteMgr.State>[] = [];
