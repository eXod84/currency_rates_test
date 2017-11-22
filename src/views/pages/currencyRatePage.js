import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrencyPair from '../components/currencyPair';

const DATA = [
  {
    symbol: "AUDUSD",
    price: 0.792495,
    bid: 0.79248,
    ask: 0.79251,
    timestamp: 1502160793
  },
  {
    symbol: "EURUSD",
    price: 1.181,
    bid: 1.18099,
    ask: 1.18101,
    timestamp: 1502160794
  },
  {
    symbol: "GBPJPY",
    price: 144.3715,
    bid: 144.368,
    ask: 144.375,
    timestamp: 1502160794
  }
];

class CurrencyRatesPage extends Component {

  render() {

    return(
      <div className="currencyRatePage">
        <div className="currencyRateTableWrpr">
          <ul className="currencyRateTable">
            {DATA.map((el) => <CurrencyPair data={el} />)}
          </ul>
          <div className="currencyRateTable__manageBtns">
            <button className="currencyRateTable__manageBtns__refresh">Refresh</button>
            <Link to="/settings" className="currencyRateTable__manageBtns__addNew">Add new</Link>
          </div>
        </div>
      </div>
    )
  }
}



export default CurrencyRatesPage;