import * as actionTypes from './actionTypes';

const initialState = {
  currencies: [],
  selectedCurrencies: ['EURUSD'],
  rates: [],
  isLoading: false
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_CURRENCIES_LOADING:
      return {...state, isLoading: true};

    case actionTypes.LOAD_RATES_SUCCESSES:
      return {...state, rates: [...action.payload], isLoading: false};

    case actionTypes.REQUEST_RATES_LOADING:
      return {...state, isLoading: true};

    case actionTypes.LOAD_CURRENCIES_SUCCESSES:
      return {...state, currencies: [...action.payload], isLoading: false};

    case actionTypes.SET_SELECTED_CURRENCY:
      return {...state, selectedCurrencies: [...state.selectedCurrencies, action.payload]};

    case actionTypes.REMOVE_SELECTED_CURRENCY:
      return {...state, selectedCurrencies: [...state.selectedCurrencies.filter(el => el !== action.payload) ]};

    default:
      return state;
  }
};