/*
 *
 * TodoList actions
 *
 */

import {
  CHANGETASK_ACTION,
  REMOVETASK_ACTION
} from './constants';

export function changeAction(index) {
  return {
    type: CHANGETASK_ACTION,
    payload: index
  };
};

export function removeAction(index) {
  return {
    type: REMOVETASK_ACTION,
    payload: index
  };
}
