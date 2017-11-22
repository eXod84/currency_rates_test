import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NotFoundPage from '../pages/notFoundPage';
import CurrencyLayout from './currencyLayout';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={CurrencyLayout} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
