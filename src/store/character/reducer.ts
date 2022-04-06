import {CharacterTypes} from './types';

const initialState = {
  isLoading: false,
  count: 0,
  next: null,
  previous: null,
  list: [],
};

// fazer tipagem do state no arquivo types.ts
//

const getList = state => ({
  ...state,
  isLoading: true,
});

const setList = (state, action) => {
  const {payload} = action;

  return {
    ...state,
    isLoading: false,
    list: payload.list,
  };
};

const characterReducerMap = new Map([
  [CharacterTypes.GET_LIST, getList],
  [CharacterTypes.SET_LIST, setList],
]);

const reducer = (state = initialState, action) => {
  const characterReducer = characterReducerMap.get(action.type);

  if (characterReducer) {
    return characterReducer(state, action);
  }
  return state;
};

export default reducer;
