import {combineReducers} from 'redux';

import character from './character/reducer';

const reducers = combineReducers({
  character,
});

export default reducers;
