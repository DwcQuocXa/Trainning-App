export default function customers(customers = [], action) {
  switch (action.type) {
    case 'FETCH_CUSTOMERS':
      return action.payload;
    default:
      return customers;
  }
}
