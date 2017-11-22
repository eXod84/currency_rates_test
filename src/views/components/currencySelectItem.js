import React from 'react';
import PropTypes from 'prop-types';
import CurrencyName from '../components/currencyName';
import '../../styles/_currencySelectItem.scss';

const CurrencySelectItem= ({symbol, selected, onSetSelectCurrency, onRemoveSelectCurrency}) => {
  function onChangeSelectCurrency() {
    if(selected) {
      onRemoveSelectCurrency(symbol);
    } else {
      onSetSelectCurrency(symbol);
    }
  }

  return(
    <label className="currencyList__currencyItem__selectItem">
      <input type="checkbox" checked={selected} onChange={onChangeSelectCurrency}/>
      <CurrencyName symbol={symbol}/>
    </label>
  );
};

CurrencySelectItem.propTypes = {
  symbol: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSetSelectCurrency: PropTypes.func.isRequired,
  onRemoveSelectCurrency: PropTypes.func.isRequired,
};

export default CurrencySelectItem;
