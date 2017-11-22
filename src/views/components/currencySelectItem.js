import React from 'react';
import CurrencyName from '../components/currencyName';

const CurrencySelectItem= ({symbol}) => {
  return(
    <label><input type="checkbox" /> <CurrencyName symbol={symbol}/></label>
  );
};

export default CurrencySelectItem;
