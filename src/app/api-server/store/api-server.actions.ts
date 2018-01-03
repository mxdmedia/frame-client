import {Action} from '@ngrx/store';

export const GET_API_SERVER_FROM_LOCALSTORE = 'GET_API_SERVER_FROM_LOCALSTORE';   // Load api server from localstore
export const SET_API_SERVER_DATA = 'SET_API_SERVER_DATA';                         // Sets any api server data (likely from localstore) to the state object.
export const TRY_API_SERVER_ADDRESS = 'TRY_API_SERVER_ADDRESS';                   // Try test api url to see if api server is working
export const INPUT_API_SERVER_ADDRESS = 'INPUT_API_SERVER_ADDRESS';               // Show api server address input page

export class GetApiServerFromLocalstore implements Action {
  readonly type = GET_API_SERVER_FROM_LOCALSTORE;
}

export class SetApiServerData implements Action {
  readonly type = SET_API_SERVER_DATA;
  constructor(public payload: {apiServerAddress?: string, deviceId?: string}) {}
}

export class TryApiServerAddress implements Action {
  readonly type = TRY_API_SERVER_ADDRESS;
  constructor(public payload: {apiServerAddress: string}) {}
}

export class InputApiServerAddress implements Action {
  readonly type = INPUT_API_SERVER_ADDRESS;
}

export type ApiServerActions =
  SetApiServerData |
  GetApiServerFromLocalstore |
  InputApiServerAddress |
  TryApiServerAddress;
