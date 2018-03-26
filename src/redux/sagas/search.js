import { call, put, takeLatest } from 'redux-saga/effects';
import { searchSuccess, searchError } from '../actions/index';

import request from '../utils/request';


export function* getRepos(input) {
  const username = input.inputString;
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    yield put(searchSuccess(repos));
  } catch (err) {
    yield put(searchError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest('search', getRepos);
}
