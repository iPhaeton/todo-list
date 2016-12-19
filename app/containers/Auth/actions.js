/*
 *
 * Auth actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction(username) {
  return {
    type: DEFAULT_ACTION,
    payload: username
  };
}
