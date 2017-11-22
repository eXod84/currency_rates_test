import React from 'react';
import CurrencyPair from './currencyPair';
import '../../styles/_currencyRateTable.scss';


const CurrencyRateTable = ({data}) => {
  return(
    <ul className="currencyRateTable">
      {data.map((el) => <CurrencyPair data={el} />)}
    </ul>
  );
};

export default CurrencyRateTable;
