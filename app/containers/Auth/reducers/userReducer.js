/*
 *
 * Auth reducer
 *
 */

import {
  AUTH_SUCCESS,
  AUTH_DENIED,
  LOGOUT
} from '../constants';

function userReducer(state, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.payload;
    case AUTH_DENIED:
      return null;
    case LOGOUT:
      return null;
    default:
      return state.get("user");
  }
};

export default userReducer;