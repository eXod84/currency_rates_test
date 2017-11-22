import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reducers from './ducks';
import buildMiddleWare, { sagaMiddleware } from './middleware';
import currencySaga from './ducks/currency/sagas';

const initialState = {};

export default function buildStore() {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    compose(
      applyMiddleware(...buildMiddleWare()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  sagaMiddleware.run(currencySaga);

  return store;
}