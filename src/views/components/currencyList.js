import React from 'react';
import PropTypes from 'prop-types';
import CurrencySelectItem from '../components/currencySelectItem';
import '../../styles/_currencyList.scss';

const CurrencyList = ({data, selectedCurrencies, onSetSelectCurrency, onRemoveSelectCurrency}) => {
  return(
    <ul className="currencyList">
      {data.map(el => <li className="currencyList__currencyItem" key={el}>
        <CurrencySelectItem
          symbol={el}
          selected={selectedCurrencies.includes(el)}
          onSetSelectCurrency={onSetSelectCurrency}
          onRemoveSelectCurrency={onRemoveSelectCurrency}
        />
      </li>)}
    </ul>
  );
};

CurrencyList.propTypes = {
  data: PropTypes.array.isRequired,
  selectedCurrencies: PropTypes.array.isRequired,
  onSetSelectCurrency: PropTypes.func.isRequired,
  onRemoveSelectCurrency: PropTypes.func.isRequired,
};

export default CurrencyList;
