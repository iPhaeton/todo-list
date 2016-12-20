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
  
  var request = new Promise ((resolve, reject) => {
    //Here should be an authentication request to server
    setTimeout(() => {
      if (user.username === "admin" && user.password === "admin") resolve(user);
      else reject(new Error("Wrong credentials"));
    }, 0);
  });
  
  return {
    type: AUTH_ACTION,
    payload: request
  };

}
