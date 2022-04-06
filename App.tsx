import React from 'react';
import {Provider} from 'react-redux';

import Navigator from './src/navigators';
import configureStore from './src/store';

const {store} = configureStore();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
};

export default App;
