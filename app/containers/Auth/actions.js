/*
 *
 * Auth actions
 *
 */

import {
  AUTH_ACTION
} from './constants';

export function defaultAction(user) {
  return {
    type: AUTH_ACTION,
    payload: user
  };
}
