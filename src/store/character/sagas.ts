import {call, put, takeLatest} from '@redux-saga/core/effects';
import {CharacterTypes} from './types';
import * as repository from './repository';
import actions from './actions';

export function* getList(): any {
  const data = yield call(repository.getList);
  yield put(actions.setList(data.results));
}

export default [takeLatest(CharacterTypes.GET_LIST, getList)];
