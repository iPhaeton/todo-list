/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTH_SUCCESS,
  AUTH_DENIED
} from './constants';

const initialState = fromJS({ user: null });

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return state.set('user', action.payload);
    case AUTH_DENIED:
      console.log(action.payload);
      return state.set('user', null);
    default:
      return state;
  }
}

export default authReducer;
