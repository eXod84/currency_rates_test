import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import CurrencyRatesPage from '../pages/currencyRatePage';
import SettingsCurrencyPage from '../pages/settingsCurrencyPage';
import NotFoundPage from '../pages/notFoundPage';


const CurrencyLayout = ({match}) => {
  return(
    <div className="contentWrpr">
      <Switch>
        <Route path={`/`} exact component={CurrencyRatesPage}/>
        <Route path={`/settings`} exact  component={SettingsCurrencyPage}/>

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default CurrencyLayout;
