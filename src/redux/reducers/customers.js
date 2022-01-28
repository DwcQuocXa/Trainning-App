const initialState = { customersList: [], searchTerm: '' };

export default function customers(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CUSTOMERS':
      return {
        ...state,
        customersList: action.payload,
      };
    case 'SEARCH_CUSTOMERS':
      const searchTerm = action.payload;
      return {
        ...state,
        searchTerm,
      };
    default:
      return state;
  }
}
