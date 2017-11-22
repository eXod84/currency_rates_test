import React from 'react';
import CurrencyName from './currencyName';
import '../../styles/_currencyPair.scss';


const CurrencyPair = ({data}) => {
  return(
    <li className="currencyPair">
      <span className="currencyPair__name"><CurrencyName symbol={data.symbol} /></span>
      <span className="currencyPair__value">{data.price}</span>
    </li>
  );
};

export default CurrencyPair;
