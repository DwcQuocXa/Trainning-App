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
    default:
      return state;
  }
}
