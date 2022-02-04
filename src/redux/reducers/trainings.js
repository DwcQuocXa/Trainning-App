const initialState = { trainingsList: [], searchTerm: '' };

export default function trainings(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TRAININGS':
      return {
        ...state,
        trainingsList: action.payload,
      };
    case 'SEARCH_TRAININGS':
      const searchTerm = action.payload;
      return {
        ...state,
        searchTerm,
      };
    case 'CREATE_TRAINING':
      return {
        ...state,
        trainingsList: state.trainingsList.push(action.payload),
      };
    case 'DELETE_TRAINING':
      return {
        ...state,
        trainingsList: state.trainingsList.filter(
          (training) => training.links[0].href !== action.payload
        ),
      };
    default:
      return state;
  }
}
