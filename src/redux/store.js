import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import reducers from './ducks';
import buildMiddleWare, { sagaMiddleware } from './middleware';
import currencySaga from './ducks/currency/sagas';

const initialState = {};
const config = {
  key: 'root',
  storage,
};

export default function buildStore() {
  let reducer = persistCombineReducers(config, reducers);
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...buildMiddleWare()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  let persistor = persistStore(store);

  sagaMiddleware.run(currencySaga);

  return { persistor, store };
}