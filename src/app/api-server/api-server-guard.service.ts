import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {Store} from '@ngrx/store';

import 'rxjs/add/operator/take';

import * as fromApp from '../store/app.reducers';
import * as fromApiServer from './store/api-server.reducers';

@Injectable()
export class ApiServerGuard implements CanActivate {
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('apiServer')
      .take(1)
      .map((apiServerState: fromApiServer.State) => {
        if(apiServerState.apiServerAddress == null || apiServerState.deviceId == null) {
          this.router.navigate(['api-server']);
          return false;
        }
        return true;
      });
  }
}
