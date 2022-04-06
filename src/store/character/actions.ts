import {CharacterTypes} from './types';

const actions = {
  getList: () => ({type: CharacterTypes.GET_LIST}),

  setList: list => ({type: CharacterTypes.SET_LIST, payload: {list}}),
};

export default actions;
