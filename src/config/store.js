import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';

const configureStore = () => {
  const middlewares = [thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const composedMiddlewares = composeWithDevTools({});

  return createStore(rootReducer, composedMiddlewares(...enhancers));
};

export const store = configureStore();
