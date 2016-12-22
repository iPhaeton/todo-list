/*
 *
 * TodoInput actions
 *
 */

import {
  NEWTASK_ACTION,
} from './constants';

export function defaultAction(task) {
  return {
    type: NEWTASK_ACTION,
    payload: {
      task,
      done:false
    }
  };
}
