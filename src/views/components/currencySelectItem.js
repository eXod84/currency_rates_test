import React from 'react';
import CurrencyName from '../components/currencyName';
import '../../styles/_currencySelectItem.scss';

const CurrencySelectItem= ({symbol}) => {
  return(
    <label className="currencyList__currencyItem__selectItem"><input type="checkbox" /> <CurrencyName symbol={symbol}/></label>
  );
};

export default CurrencySelectItem;
