import axios from 'axios';

const API = axios.create({
  baseURL: 'https://customerrest.herokuapp.com',
});

export const fetchCustomers = () => API.get('/api/customers');
export const createCustomer = (newCustomer) =>
  API.post('/api/customers', newCustomer);
export const updateCustomer = (url, updatedCustomer) =>
  axios.put(url, updatedCustomer);
export const deleteCustomer = (url) => axios.delete(url);

export const fetchTrainings = () => API.get('/api/trainings');
export const createTraining = (newTraining) =>
  API.post('/api/trainings', newTraining);
export const deleteTraining = (url) => axios.delete(url);

export const getTrainings = () => API.get('/gettrainings')
