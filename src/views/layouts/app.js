import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import NotFoundPage from '../pages/notFoundPage';
import CurrencyLayout from './currencyLayout';
import buildStore from '../../redux/store';
import LoadingIndicator from '../components/loadingIndicator';

const { persistor, store } = buildStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <PersistGate
          loading={<LoadingIndicator />}
          persistor={persistor}>
          <Router>
            <Switch>
              <Route path="/" component={CurrencyLayout} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
