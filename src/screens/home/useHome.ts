import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import characterActions from '../../store/character/actions';
import * as charactersSelector from '../../store/character/selectors';

const useHome = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(charactersSelector.isLoading);
  const list = useSelector(charactersSelector.getList);
  useEffect(() => {
    dispatch(characterActions.getList());
  }, [dispatch]);

  return {
    isLoading,
    list,
  };
};

export default useHome;
