import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import FastClick from 'fastclick';
import Layout from './components/Layout';
import HomePage from './pages/home';
import DocsPage from './pages/docs';
import ErrorPage from './pages/error';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="docs" component={DocsPage} />
      <Route path="*" component={ErrorPage} />
    </Route>
  </Router>,
  document.getElementById('app'));

// Eliminates the 300ms delay between a physical tap and the firing of a
// click event on mobile browsers. https://github.com/ftlabs/fastclick
FastClick.attach(document.body);

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}
