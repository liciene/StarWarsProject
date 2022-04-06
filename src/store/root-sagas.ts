import {all} from 'redux-saga/effects';
import characterSagas from './character/sagas';

function* rootSagas() {
  yield all([...characterSagas]);
}

export default rootSagas;
