import { delay } from 'redux-saga';
import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

const getIsLoading = (state) => state.currency.isLoading;
const getSelectedCurrencies = (state) => state.currency.selectedCurrencies;

function* getCurrencies() {

  const DATA = [
    "AUDJPY",
    "AUDUSD",
    "CHFJPY",
    "EURAUD",
    "EURCAD",
    "EURCHF",
    "EURGBP",
    "EURJPY",
    "EURUSD",
    "GBPAUD",
    "GBPCAD",
    "GBPCHF",
    "GBPJPY",
    "NZDJPY",
    "NZDUSD",
    "USDCAD",
    "USDCHF",
    "USDJPY",
    "AUDCAD",
    "AUDCHF",
  ];

  const isLoading = yield select(getIsLoading);

  if(!isLoading) {
    yield put(actions.requestCurrenciesLoading());

    yield call(delay, 1000);
    yield put(actions.loadCurrenciesSuccess(DATA));
  }
}

function* getRates() {

  const DATA = [
    {
      symbol: "AUDUSD",
      price: 0.792495,
      bid: 0.79248,
      ask: 0.79251,
      timestamp: 1502160793
    },
    {
      symbol: "EURUSD",
      price: 1.181,
      bid: 1.18099,
      ask: 1.18101,
      timestamp: 1502160794
    },
    {
      symbol: "GBPJPY",
      price: 144.3715,
      bid: 144.368,
      ask: 144.375,
      timestamp: 1502160794
    }
  ];

  const isLoading = yield select(getIsLoading);

  if(!isLoading) {
    yield put(actions.requestRatesLoading());

    yield call(delay, 1000);
    yield put(actions.loadRatesSuccess(DATA));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.REQUEST_LOAD_CURRENCIES, getCurrencies),
    takeEvery(actionTypes.REQUEST_LOAD_RATES, getRates),
  ])
}