import { combineReducers } from 'redux';
import { routerReducer } from 'redux-json-router';

const reducer = combineReducers({
  router: routerReducer,
});

export default reducer;
