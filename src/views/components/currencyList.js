import React from 'react';
import CurrencySelectItem from '../components/currencySelectItem';
import '../../styles/_currencyList.scss';

const CurrencyList= ({data}) => {

  return(
    <ul className="currencyList">
      {data.map(el => <li className="currencyList__currencyItem">
        <CurrencySelectItem symbol={el}/>
      </li>)}
    </ul>
  );
};

export default CurrencyList;
