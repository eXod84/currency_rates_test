import React from 'react';
import CurrencyName from './currencyName';
import '../../styles/_currencyPair.scss';


const CurrencyPair = ({data, maxDigitsAfterPoint}) => {
  const amountOfDigits = data.price.toString().split('.')[1].length;

  return(
    <li className="currencyPair">
      <span className="currencyPair__name"><CurrencyName symbol={data.symbol} /></span>
      <span className="currencyPair__value">{`${data.price}${'\0'.repeat(maxDigitsAfterPoint-amountOfDigits)}`}</span>
    </li>
  );
};

export default CurrencyPair;
