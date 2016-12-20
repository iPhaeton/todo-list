/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DENIED_ACTION,
  APPROVED_ACTION,
} from './constants';

const initialState = fromJS({ user: {} });

function authReducer(state = initialState, action) {
  switch (action.type) {
    case APPROVED_ACTION:
      return state.set('user', action.payload);
    case DENIED_ACTION:
      return state.set('user', action.payload);
    default:
      return state;
  }
}

export default authReducer;
