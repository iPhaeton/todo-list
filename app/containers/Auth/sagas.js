import { take, call, put, fork, cancel, cancelled, race } from 'redux-saga/effects';

import fetch from "./fetch";
import log from "../../log";
import { AuthDeniedError } from "./errors";

var router = require('react-router');
 
import {
  AUTH_ACTION,
  AUTH_SUCCESS,
  AUTH_DENIED,
  LOGOUT,
  NEW_AUTHSAGA_STARTED
} from './constants';

export function* startAuthSaga () {
  yield put({type: NEW_AUTHSAGA_STARTED});
  const auth = yield fork(authSaga);
  yield take (NEW_AUTHSAGA_STARTED);
  yield cancel(auth);
}

export function* authSaga () {
  try{
    yield fork(watchAuth);

    while (true) {
      const auth = yield take(AUTH_ACTION);
      const fetch = yield fork(fetchUser, auth);

      //in case LOGOUT happens before authentication is finished
      const nextAction = yield take([LOGOUT, AUTH_DENIED]);
      if (nextAction.type === LOGOUT) {
        yield cancel(fetch);
        yield call(router.browserHistory.push, '/');
      };
    };
  } finally {
    log(module, "authSaga stopped");
  };
};

function* fetchUser (action) {
  try {
    const user = yield call(fetch, action.payload);
    yield put({type: AUTH_SUCCESS, payload: user});
  } catch (err) {
    if (err instanceof AuthDeniedError) {
      log(module, err);
      yield put({type: AUTH_DENIED, payload: err.message});
    } else {
      log(module, err);
      yield put({type: AUTH_DENIED, payload: "Server responded with an error"});
    };
  } finally {
    log(module, "fetchUser stopped");
  }
};

function* watchAuth () {
  try {
    log(module, "watchAuth started");
    while (true) {
      const { success } = yield race ({
        success: take(AUTH_SUCCESS),
        denied: take(AUTH_DENIED)
      });

      if (success) {
        yield call(router.browserHistory.push, '/todos');
      };
    };
  } finally {
    log(module, "watchAuth stopped");
  };
};

// All sagas to be loaded
export default [
  startAuthSaga
];