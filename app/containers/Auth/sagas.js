import { takeEvery } from "redux-saga";
import { take, call, put, fork, cancel, cancelled, race } from 'redux-saga/effects';

import fetch from "./fetch";

var router = require('react-router');
 
import {
  AUTH_ACTION,
  AUTH_SUCCESS,
  AUTH_DENIED
} from './constants';

import { LOCATION_CHANGE } from "react-router-redux";

export function* authSaga () {
  yield race ({
    watchAuth: call(watchAuth),
    cancel: take (LOCATION_CHANGE)
  });
}

function* watchAuth() {
  try {
    while (true) {
      let action = yield take(AUTH_ACTION);
      yield call(fetchUser, action);
    };
  } finally {
    if (yield cancelled()) {
      console.log ("Auth watcher cancelled");
    };
  };
};

function* fetchUser (action) {
  try {
    const user = yield call(fetch, action.payload);
    router.browserHistory.push('/todos');
    yield put({type: AUTH_SUCCESS, payload: user});
  } catch (err) {
    yield put({type: AUTH_DENIED, payload: err});
  }
}

// All sagas to be loaded
export default [
  authSaga
];