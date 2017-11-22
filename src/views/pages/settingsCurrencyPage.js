import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrencyList from '../components/currencyList';
import '../../styles/_settingsCurrencyPage.scss';

const DATA = [
  "AUDJPY",
  "AUDUSD",
  "CHFJPY",
  "EURAUD",
  "EURCAD",
  "EURCHF",
  "EURGBP",
  "EURJPY",
  "EURUSD",
  "GBPAUD",
  "GBPCAD",
  "GBPCHF",
  "GBPJPY",
  "NZDJPY",
  "NZDUSD",
  "USDCAD",
  "USDCHF",
  "USDJPY",
  "AUDCAD",
  "AUDCHF",
];


class AddCurrencyPage extends Component {


  render() {

    return(
      <div className="addCurrencyPage">
        <CurrencyList data={DATA}/>
        <div className="manageBtns"><Link className="manageBtns__acceptSettings" to="/">OK</Link></div>
      </div>
    )
  }
}



export default AddCurrencyPage;