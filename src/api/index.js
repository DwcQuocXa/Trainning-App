import axios from 'axios';

const API = axios.create({
  baseURL: 'https://customerrest.herokuapp.com/api',
});

export const fetchCustomers = () => API.get('/customers');

export const fetchTrainings = () => API.get('/trainings');
