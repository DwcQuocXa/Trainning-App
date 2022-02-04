import * as api from '../../api';

export const getCustomers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCustomers();
    dispatch({ type: 'FETCH_CUSTOMERS', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const searchCustomers = (searchTerm) => (dispatch) => {
  try {
    dispatch({ type: 'SEARCH_CUSTOMERS', payload: searchTerm });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCustomer = (newCustomer) => async (dispatch) => {
  try {
    const { data } = await api.createCustomer(newCustomer);
    dispatch({ type: 'CREATE_CUSTOMER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCustomer = (url, updatedCustomer) => async (dispatch) => {
  try {
    const { data } = await api.updateCustomer(url, updatedCustomer);
    dispatch({ type: 'UPDATE_CUSTOMER', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCustomer = (url) => async (dispatch) => {
  try {
    await api.deleteCustomer(url);
    dispatch({ type: 'DELETE_CUSTOMER', payload: url });
  } catch (error) {
    console.log(error.message);
  }
};
