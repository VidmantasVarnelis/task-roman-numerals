import React from 'react';
import { Provider } from 'react-redux';
import Navigator from 'navigator/Navigator';
import { store } from 'store';
import { GlobalStyle } from './global-styles.styles';

const AppProvider: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Navigator />
    </Provider>
  );
};

export default AppProvider;
