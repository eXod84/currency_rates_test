import * as actionTypes from './actionTypes';

export const requestLoadCurrencies = () => {
  return {
    type: actionTypes.REQUEST_LOAD_CURRENCIES,
  }
};

export const requestCurrenciesLoading = () => {
  return {
    type: actionTypes.REQUEST_CURRENCIES_LOADING,
  }
};

export const loadCurrenciesSuccess = (currencies) => {
  return {
    type: actionTypes.LOAD_CURRENCIES_SUCCESSES,
    payload: currencies
  }
};

export const setSelectedCurrency = (currency) => {
  return {
    type: actionTypes.SET_SELECTED_CURRENCY,
    payload: currency
  }
};

export const removeSelectedCurrency = (currency) => {
  return {
    type: actionTypes.REMOVE_SELECTED_CURRENCY,
    payload: currency
  }
};


export const requestLoadRates = () => {
  return {
    type: actionTypes.REQUEST_LOAD_RATES,
  }
};

export const requestRatesLoading = () => {
  return {
    type: actionTypes.REQUEST_RATES_LOADING,
  }
};

export const loadRatesSuccess = (rates) => {
  return {
    type: actionTypes.LOAD_RATES_SUCCESSES,
    payload: rates
  }
};