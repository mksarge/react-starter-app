import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';
import { createBrowserHistory, startListener, Router } from 'redux-json-router';
import Layout from './components/Layout';
import configureStore from './redux/store';
import routeConfig from '../config/routes.json';

// create history singleton
const history = createBrowserHistory();

// configure store with history and default initialState
const store = configureStore(history);

// dispatch action if history is manually changed (with the navigation buttons or address bar)
startListener(history, store);

const render = (routes) => {
  ReactDOM.render(
    <Provider store={store}>
      <Layout>
        <Router routes={routes} />
      </Layout>
    </Provider>,
    document.getElementById('app'));
};

render(routeConfig);

// Eliminates the 300ms delay between a physical tap and the firing of a
// click event on mobile browsers. https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept(['../config/routes.json', './components/Layout'], () => {
    render(routeConfig);
  });
}
