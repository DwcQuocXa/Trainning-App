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
