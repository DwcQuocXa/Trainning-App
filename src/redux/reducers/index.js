import { combineReducers } from 'redux';
import customers from './customers';
import trainings from './trainings';

export const reducers = combineReducers({
  customers: customers,
  trainings: trainings,
});
