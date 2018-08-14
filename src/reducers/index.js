import { combineReducers } from 'redux';
import currency from './currency';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  currency,
});

export default rootReducer;
