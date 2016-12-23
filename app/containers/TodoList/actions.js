/*
 *
 * TodoList actions
 *
 */

import {
  CHANGETASK_ACTION,
} from './constants';

export function defaultAction(index) {
  return {
    type: CHANGETASK_ACTION,
    payload: index
  };
}
