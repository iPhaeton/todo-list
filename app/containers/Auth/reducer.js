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

const initialState = fromJS({ user: null });

function userReducer(state = initialState, action) {
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

export default userReducer;