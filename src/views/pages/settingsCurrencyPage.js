import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrencySelectItem from '../components/currencySelectItem';

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

  renderCurrencies() {
    return DATA.map(el => <li className="addCurrencyPage__currencyList__currencyItem">
      <CurrencySelectItem symbol={el}/>
    </li>);
  }

  render() {

    return(
      <div className="addCurrencyPage">
        <ul className="addCurrencyPage__currencyList">
          {this.renderCurrencies()}
        </ul>
        <div className="manageBtns"><Link to="/">OK</Link></div>
      </div>
    )
  }
}



export default AddCurrencyPage;