import { put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './TestImgAndCssActions';


function* simpleSaga() {
  try {
    yield put({ type: actionTypes.SIMPLE_SAGA_SUCCESS, status: 'success' });
  } catch (e) {
    yield put({ type: actionTypes.SIMPLE_SAGA_FAILURE, status: e.message });
  }
}

export default function* testImgAndCssSagas() {
  yield [
    takeEvery(actionTypes.A_SIMPLE_ACTION, simpleSaga),
    takeEvery(actionTypes.OBSERVABLE_PING, simpleSaga),
  ];
}
