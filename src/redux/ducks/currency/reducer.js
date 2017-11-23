import * as actionTypes from './actionTypes';

const initialState = {
  currencies: [],
  selectedCurrencies: ['EURUSD'],
  rates: [],
  isLoading: false
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_RATES_SUCCESSES:
      return {...state, rates: [...action.payload]};

    case actionTypes.LOAD_CURRENCIES_SUCCESSES:
      return {...state, currencies: [...action.payload]};

    case actionTypes.SET_SELECTED_CURRENCY:
      return {...state, selectedCurrencies: [...state.selectedCurrencies, action.payload]};

    case actionTypes.REMOVE_SELECTED_CURRENCY:
      return {...state, selectedCurrencies: [...state.selectedCurrencies.filter(el => el !== action.payload) ]};

    default:
      return state;
  }
};