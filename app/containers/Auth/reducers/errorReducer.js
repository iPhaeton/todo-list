/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  AUTH_SUCCESS,
  AUTH_DENIED
} from '../constants';

const initialState = fromJS({ error: "" });

function error(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return state.set('error', "");
    case AUTH_DENIED:
      return state.set('error', action.payload);
    default:
      return state;
  }
};

export default error;