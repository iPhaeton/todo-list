/*
 *
 * Auth actions
 *
 */
 
var router = require('react-router');

import {
  DENIED_ACTION,
  APPROVED_ACTION
} from './constants';

export function defaultAction(err, user) {
  
  if (err) {
    return {
      type: DENIED_ACTION,
      payload: err
    };
  } else {
    router.browserHistory.push('/');
    
    return {
      type: APPROVED_ACTION,
      payload: user
    };
  };

}
