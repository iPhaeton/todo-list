/*
 *
 * Auth actions
 *
 */

import {
  AUTH_ACTION
} from './constants';

var router = require('react-router');

export function defaultAction(user) {
  //router.browserHistory.push('/');
  
  return {
    type: AUTH_ACTION,
    payload: user
  };

}
