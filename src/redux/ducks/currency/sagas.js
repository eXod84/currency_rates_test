import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import { loadCurrencies, loadRates } from '../../utils/api';

const refreshDelay = 1000 * 60;

const getIsLoading = (state) => state.currency.isLoading;
const getSelectedCurrencies = (state) => state.currency.selectedCurrencies;

function* getCurrencies() {

  const isLoading = yield select(getIsLoading);

  if(!isLoading) {
    yield put(actions.requestCurrenciesLoading());

    try {
      const data = yield call(loadCurrencies);
      yield put(actions.loadCurrenciesSuccess(data));
    } catch(err) {
      console.log(err);
    }
  }
}

function* getRates() {

  const isLoading = yield select(getIsLoading);

  if(!isLoading) {
    yield put(actions.requestRatesLoading());

    const selectedCurrencies = yield select(getSelectedCurrencies);

    try {
      const data = yield call(loadRates, selectedCurrencies);

      yield put(actions.loadRatesSuccess(data));
    } catch(err) {
      console.log(err);
    }
  }
}

function* updateRates() {
  while(true) {
    yield call(delay, refreshDelay);

    const isLoading = yield select(getIsLoading);

    if(!isLoading) {
      yield put(actions.requestLoadRates());
    }

  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.REQUEST_LOAD_CURRENCIES, getCurrencies),
    takeEvery(actionTypes.REQUEST_LOAD_RATES, getRates),
    call(updateRates)
  ])
}