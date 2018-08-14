export const ADD_CURRENCY_SYMBOL = 'ADD_CURRENCY_SYMBOL';
export const DELETE_CURRENCY_SYMBOL = 'DELETE_CURRENCY_SYMBOL';
export const FETCH_CURRENCY_RATE = 'FETCH_CURRENCY_RATE';
export const FETCH_CURRENCY_RATE_SUCCESS = 'FETCH_CURRENCY_RATE_SUCCESS';
export const FETCH_CURRENCY_RATE_ERROR = 'FETCH_CURRENCY_RATE_ERROR';

export function fetchCurrencyAction() {
  return {
    type: FETCH_CURRENCY_RATE,
  };
}

export function fetchCurrencySuccessAction(rates = {}) {
  return {
    type: FETCH_CURRENCY_RATE_SUCCESS,
    data: rates,
  };
}

export function fetchCurrencyErrorAction(error) {
  return {
    type: FETCH_CURRENCY_RATE_ERROR,
    data: error,
  };
}

export function addCurrencyAction(symbol) {
  return {
    type: ADD_CURRENCY_SYMBOL,
    data: symbol.toUpperCase(),
  };
}

export function deleteCurrencyAction(symbol) {
  return {
    type: DELETE_CURRENCY_SYMBOL,
    data: symbol,
  };
}
