import * as ApiServerActions from './api-server.actions';


export interface State {
  apiServerAddress: string;
  apiServerStatus: boolean;
  authCode: string;
  authId: string;
  authState: string;
  deviceId: string;
}

const initialState: State = {
  apiServerAddress: null,
  apiServerStatus: false,
  authId: null,
  authCode: null,
  authState: null,
  deviceId: null
};


export function apiServerReducer(state = initialState, action: ApiServerActions.ApiServerActions) {
  switch (action.type) {
    case (ApiServerActions.SET_API_SERVER_DATA):
      return {
        ...state,
        ...action.payload
      };
    case (ApiServerActions.INPUT_API_SERVER_ADDRESS):
    case (ApiServerActions.TRY_API_SERVER_ADDRESS):
    default:
      return state;
  }
}
