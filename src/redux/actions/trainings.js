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

export const createTraining = (newTraining) => async (dispatch) => {
  try {
    const { data } = await api.createTraining(newTraining);
    dispatch({ type: 'CREATE_TRAINING', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTraining = (url) => async (dispatch) => {
  try {
    await api.deleteTraining(url);
    dispatch({ type: 'DELETE_TRAINING', payload: url });
  } catch (error) {
    console.log(error.message);
  }
};
