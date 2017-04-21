import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'redux-json-router';
import rootReducer from './reducer';

function configureStore(history, initialState = {}) {
  const middlewares = [
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production'
      && typeof window === 'object'
      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const newRootReducer = require('./reducer').default; // eslint-disable-line global-require
      store.replaceReducer(newRootReducer);
      //
    });
  }

  return store;
}

export default configureStore;
