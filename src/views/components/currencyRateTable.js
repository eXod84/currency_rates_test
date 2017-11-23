import React from 'react';
import CurrencyPair from './currencyPair';
import '../../styles/_currencyRateTable.scss';


const CurrencyRateTable = ({data}) => {
  const maxDigitsAfterPoint = data.reduce((acc, curr) => {

    const amountOfDigits = curr.price.toString().split('.')[1].length;
    if( acc < amountOfDigits ) acc = amountOfDigits;

    return acc;
  }, 0);

  return(
    <ul className="currencyRateTable">
      {data.map((el) => <CurrencyPair data={el} maxDigitsAfterPoint={maxDigitsAfterPoint} key={el.symbol} />)}
    </ul>
  );
};

export default CurrencyRateTable;
