import { DEFAULT_CURRENCY } from 'constants/currency';
import {
    ADD_CURRENCY_SYMBOL,
    DELETE_CURRENCY_SYMBOL,
    FETCH_CURRENCY_RATE_SUCCESS,
    FETCH_CURRENCY_RATE,
    FETCH_CURRENCY_RATE_ERROR,
} from 'actions/currency';

const initialState = {
    symbols: ['IDR', 'EUR', 'GBP', 'SGD'],
    base: DEFAULT_CURRENCY,
    rates: {},
    isLoading: false,
    error: null,
};

export default function currency(state = initialState, action) {
    switch (action.type) {
        case ADD_CURRENCY_SYMBOL:
            return {
                ...state,
                symbols: [...state.symbols, action.data],
            };
        case DELETE_CURRENCY_SYMBOL:
            return {
                ...state,
                symbols: state.symbols.filter((item) => item !== action.data),
            };
        case FETCH_CURRENCY_RATE:
            return { ...state, isLoading: true, error: null };
        case FETCH_CURRENCY_RATE_SUCCESS:
            return { ...state, rates: action.data, isLoading: false };
        case FETCH_CURRENCY_RATE_ERROR:
            return { ...state, isLoading: false, error: action.data };
        default:
            return state;
    }
}
