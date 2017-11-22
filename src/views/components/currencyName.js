import React from 'react';

const CurrencyName= ({symbol}) => {
  return(
    <span>
      {`${symbol.slice(0,3)} / ${symbol.slice(3)}`}
    </span>
  );
};

export default CurrencyName;
