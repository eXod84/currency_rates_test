import React from 'react';
import PropTypes from 'prop-types';
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


CurrencyPair.propTypes = {
  data: PropTypes.object.isRequired,
  maxDigitsAfterPoint: PropTypes.number.isRequired,
};

export default CurrencyPair;
