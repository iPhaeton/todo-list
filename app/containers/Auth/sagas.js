import { take, call, put, fork, cancel, cancelled, race } from 'redux-saga/effects';

import fetch from "./fetch";
import log from "../../log";

var router = require('react-router');
 
import {
  AUTH_ACTION,
  AUTH_SUCCESS,
  AUTH_DENIED,
  LOGOUT
} from './constants';

import { LOCATION_CHANGE } from "react-router-redux";

export function* startAuthSaga () {
  const auth = yield fork(authSaga);
  yield take (LOCATION_CHANGE);
  yield cancel(auth);
}

export function* authSaga () {
  try{
    while (true) {
      const { auth } = yield race ({
        auth: take(AUTH_ACTION),
        logout: take(LOGOUT)
      });

      if (auth) {
        yield fork(watchAuth);
        yield fork(fetchUser, auth);
      }; /*else {
        yield cancel(fetch);
        log(module, "Canceled");
      }*/
    };
  } finally {
    log(module, "authSaga canceled");
  };
};

function* fetchUser (action) {
  try {
    //yield put({type: LOGOUT});
    const user = yield call(fetch, action.payload);
    yield put({type: AUTH_SUCCESS, payload: user});
  } catch (err) {
    yield put({type: AUTH_DENIED, payload: err});
  }
};

function* watchAuth () {
  while (true) {
    log(module, "watch auth started");
    const { success } = yield race ({
      success: take(AUTH_SUCCESS),
      denied: take(AUTH_DENIED)
    });

    if (success) {
      yield call(router.browserHistory.push, '/todos');
    };
  }
};

// All sagas to be loaded
export default [
  startAuthSaga
];