import axios from 'axios';

const API = axios.create({
  baseURL: 'https://customerrest.herokuapp.com/api',
});

export const fetchCustomers = () => API.get('/customers');
export const createCustomer = (newCustomer) =>
  API.post('/customers', newCustomer);
export const updateCustomer = (url, updatedCustomer) =>
  axios.put(url, updatedCustomer);
export const deleteCustomer = (url) => axios.delete(url);

export const fetchTrainings = () => API.get('/trainings');
export const createTraining = (newTraining) =>
  API.post('/trainings', newTraining);
export const deleteTraining = (url) => axios.delete(url);
