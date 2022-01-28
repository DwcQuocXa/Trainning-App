import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './style';

const Customers = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customers = useSelector(
    (state) => state.customers.customersList.content
  );
  const searchTerm = useSelector((state) => state.customers.searchTerm);
  const [pageSize, setPageSize] = React.useState(5);

  const columns = [
    { field: 'id', hide: true },
    { field: 'firstname', headerName: 'First Name', width: 200 },
    { field: 'lastname', headerName: 'Last Name', width: 200 },
    { field: 'streetaddress', headerName: 'Street Address', width: 300 },
    { field: 'postcode', headerName: 'Postcode', width: 300 },
    { field: 'city', headerName: 'City', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'phone', headerName: 'Phone', width: 300 },
  ];

  const rows = customers
    ?.filter((customer) =>
      customer.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((customer) => ({
      id: uuidv4(),
      firstname: customer.firstname,
      lastname: customer.lastname,
      streetaddress: customer.streetaddress,
      postcode: customer.postcode,
      city: customer.city,
      email: customer.email,
      phone: customer.phone,
    }));

  return !customers?.length ? (
    <CircularProgress className={classes.loading} size={80} />
  ) : (
    <div className={classes.listTable}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        columns={columns}
        rows={rows}
        scrollbarSize={0}
      />
    </div>
  );
};

export default Customers;
