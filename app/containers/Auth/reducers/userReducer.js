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
} from '../constants';

import log from "../../../log";

const initialState = fromJS({ user: null });

function user(state = initialState, action) {
  log(module, state);
  switch (action.type) {
    case AUTH_SUCCESS:
      return state.set('user', action.payload);
    case AUTH_DENIED:
      return state.set('user', null);
    case LOGOUT:
      return state.set('user', null);
    default:
      return state;
  }
};

export default user;