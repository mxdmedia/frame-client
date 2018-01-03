import { ActionReducerMap } from '@ngrx/store';

import * as fromApiServer from '../api-server/store/api-server.reducers';

export interface AppState {
  apiServer: fromApiServer.State
}

export const reducers: ActionReducerMap<AppState> = {
  apiServer: fromApiServer.apiServerReducer
};
