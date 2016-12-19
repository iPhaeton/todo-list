/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({username: "111"});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set("username", action.payload);
    default:
      return state;
  }
}

export default authReducer;
