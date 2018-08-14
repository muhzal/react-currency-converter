import { put, takeLatest, select, call } from 'redux-saga/effects';
import {
    FETCH_CURRENCY_RATE,
    fetchCurrencyErrorAction,
    fetchCurrencySuccessAction,
} from 'actions/currency';
import axios from 'axios';

function rateApi(base) {
    return axios
        .request({
            method: 'GET',
            url: '/api/latest',
            params: { base },
        })
        .then((response) => {
            return response.data;
        });
}

export function* fetchCurrencyRate() {
    const base = yield select(({ currency }) => currency.base);

    try {
        const { rates, error } = yield call(rateApi, base);
        if (error) {
            yield put(fetchCurrencyErrorAction(error));
        } else {
            yield put(fetchCurrencySuccessAction(rates));
        }
    } catch (exception) {
        yield put(fetchCurrencyErrorAction(exception.message));
    }
}

export default function* root() {
    yield takeLatest(FETCH_CURRENCY_RATE, fetchCurrencyRate);
}
