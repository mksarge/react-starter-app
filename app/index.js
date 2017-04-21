import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';
import { createBrowserHistory, startListener, Router } from 'redux-json-router';
import configureStore from './redux/store';
import routes from '../config/routes.json';

// create history singleton
const history = createBrowserHistory();

// configure store with history and default initialState
const store = configureStore(history);

// dispatch action if history is manually changed (with the navigation buttons or address bar)
startListener(history, store);

render(
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>,
  document.getElementById('app'));

// Eliminates the 300ms delay between a physical tap and the firing of a
// click event on mobile browsers. https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}
