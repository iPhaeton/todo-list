/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTH_ACTION
} from './constants';

const initialState = fromJS({ user: null });

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION:
      return state.set('user', action.payload);
    default:
      return state;
  }
}

export default authReducer;
