import React from 'react';
import Stacks from './app/routes/Stacks';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Stacks />
    </Provider>
  );
};

export default App;
