import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFoundPage from '../pages/notFoundPage';
import CurrencyLayout from './currencyLayout';
import buildStore from '../../redux/store';

const store = buildStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Switch>
            <Route path="/" component={CurrencyLayout} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
