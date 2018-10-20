import { all, fork } from 'redux-saga/effects';
import appSaga from 'src/app/saga';

export default function*() {
  yield all([
    fork(appSaga),
  ]);
}
