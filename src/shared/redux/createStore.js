import { createStore, combineReducers, applyMiddleware } from 'redux';

import { routerReducer } from 'react-router-redux';

import * as Reducers from './reducers/index.js';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      ...Reducers,
      router: routerReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
