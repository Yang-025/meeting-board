// saga統一出口

import { fork, all } from 'redux-saga/effects';
import testImgAndCssSagas from '~~features/TestImgAndCss/TestImgAndCssSagas';

export default function* rootSaga() {
  yield [
    fork(testImgAndCssSagas)
  ];
}
