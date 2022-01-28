import * as api from '../../api';

export const getTrainings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTrainings();
    dispatch({ type: 'FETCH_TRAININGS', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const searchTrainings = (searchTerm) => (dispatch) => {
  try {
    dispatch({ type: 'SEARCH_TRAININGS', payload: searchTerm });
  } catch (error) {
    console.log(error.message);
  }
};
