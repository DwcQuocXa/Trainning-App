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
    case 'CREATE_CUSTOMER':
      return {
        ...state,
        customersList: state.customersList.push(action.payload),
      };
    case 'UPDATE_CUSTOMER':
      return {
        ...state,
        customersList: state.customersList.map((customer) =>
          customer.links[0].href === action.payload.links[0].href
            ? action.payload
            : customer
        ),
      };
    case 'DELETE_CUSTOMER':
      return {
        ...state,
        customersList: state.customersList.filter(
          (customer) => customer.links[0].href !== action.payload
        ),
      };
    default:
      return state;
  }
}
