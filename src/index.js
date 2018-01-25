import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './store';
import ScrollToTop from './components/ScrollToTop';
import App from './components/App';

const store = configureStore();

render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
);
