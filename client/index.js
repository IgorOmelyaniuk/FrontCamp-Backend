import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';

import './styles.css'

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

hydrate(app, document.getElementById('root'));
