/*
 *
 * Auth actions
 *
 */

import {
  AUTH_ACTION
} from './constants';

export function authAction(user) {
  return {
    type: AUTH_ACTION,
    payload: user
  };
}

