import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import * as ApiServerActions from './api-server.actions';
import { AppState } from '../../store/app.reducers';


interface ApiServerCheckResponse {
  status: string;
}

@Injectable()
export class ApiServerEffects {
  @Effect()
  apiServerFromLocalstore = this.actions$
    .ofType(ApiServerActions .GET_API_SERVER_FROM_LOCALSTORE)
    .map(() => {
      console.log('apiServerFromLocalstore effect.');
      const vals = { apiServerAddress: localStorage.getItem('apiServerAddress'), deviceId: localStorage.getItem('deviceId') };
      console.log(vals);
      return {
        type: ApiServerActions.SET_API_SERVER_DATA,
        payload: vals
      };
    });

  @Effect()
  setApiServerData = this.actions$
    .ofType(ApiServerActions.SET_API_SERVER_DATA)
    .withLatestFrom(this.store$.select(state => state.apiServer.apiServerAddress))
    .map(([action, apiServerAddress]) => {
      console.log('setApiServerData effect.');
      if( apiServerAddress ) {
        return {
          type: ApiServerActions.TRY_API_SERVER_ADDRESS,
          payload: {endpointAddress: apiServerAddress}
        };
      } else {
        this.router.navigate(['api-server', 'address'])
        return {
          type: ApiServerActions.INPUT_API_SERVER_ADDRESS
        };
      }
    });

  // @Effect()
  // tryEndpointAddress = this.actions$
  //   .ofType(ApiServerActions.TRY_API_SERVER_ADDRESS)
  //   .withLatestFrom(this.store$.select(state => state.endpoint.endpointAddress))
  //   .map(([action, endpointAddress]) => {
  //     console.log('tryEndpointAddress effect.');
  //     return this.http.get<EndpointCheckResponse>(endpointAddress + '/api/v1/registration-keys/')
  //   })
  //   .map;

  constructor(private actions$: Actions, private store$: Store<AppState>, private router: Router, private http: HttpClient) {}
}
