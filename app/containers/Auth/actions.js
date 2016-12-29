/*
 *
 * Auth actions
 *
 */

import {
  AUTH_ACTION,
  LOGOUT
} from './constants';

export function authAction(user) {
  return {
    type: AUTH_ACTION,
    payload: user
  };
}

export function logoutAction() {
  return {
    type: LOGOUT
  };
}