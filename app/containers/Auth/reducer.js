/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTH_SUCCESS,
  AUTH_DENIED,
  LOGOUT
} from './constants';

import log from "../../log";

const initialState = fromJS({ user: null });

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      log(module, "auth success");
      return state.set('user', action.payload);
    case AUTH_DENIED:
      log(module, "auth denied");
      console.log(action.payload);
      return state.set('user', null);
    case LOGOUT:
      log(module, "logout");
      return state.set('user', null);
    default:
      return state;
  }
}

export default authReducer;
