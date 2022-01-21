import { combineReducers } from 'redux';
import customers from './customers';

export const reducers = combineReducers({
  customers: customers,
});
