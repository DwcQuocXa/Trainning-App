import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { CSVLink } from 'react-csv';
import Button from '@mui/material/Button';

import useStyles, { DataGridDiv } from './style';
import CustomersForm from '../CustomersForm';
import RemoveModal from '../RemoveModal';
import TrainingForm from './TrainingForm';
import { updateCustomer, getCustomers, deleteCustomer, getTrainings, createTraining } from '../../redux/actions';

const Customers = ({ openLeft, setOpenLeft }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customers = useSelector((state) => state.customers.customersList.content);
  const searchTerm = useSelector((state) => state.customers.searchTerm);
  const [pageSize, setPageSize] = useState(5);
  const [openForm, setOpenForm] = useState(false);
  const [openTraining, setOpenTraining] = useState(false);
  const [rowData, setRowData] = useState();
  const [removeModal, setRemoveModal] = useState(false);

  const handleCloseForm = () => setOpenForm(false);
  const handleOpenForm = (params) => {
    setOpenForm(true);
    setRowData(params.row);
  };

  const handleDelete = (params) => {
    setRemoveModal(true);
    setRowData(params.row);
  };

  const handleAddTraining = (params) => {
    setOpenTraining(true);
    setRowData(params.row);
  };

  const onSubmitUpdate = (updatedCustomer) => {
    dispatch(updateCustomer(rowData.id, updatedCustomer));
    handleCloseForm();
    dispatch(getCustomers());
    navigate(`/customers`);
  };

  const onSubmitDelete = () => {
    dispatch(deleteCustomer(rowData.id));
    dispatch(getCustomers());
    navigate(`/customers`);
    setRemoveModal(false);
  };

  const onSubmitTraining = (newTraining) => {
    dispatch(createTraining(newTraining));
    setOpenTraining(false);
    dispatch(getTrainings());
    navigate(`/trainings`);
  };

  const renderCellEdit = (params) => {
    return (
      <div>
        <IconButton onClick={() => handleOpenForm(params)}>
          <EditIcon />
        </IconButton>
      </div>
    );
  };

  const renderCellDelete = (params) => {
    return (
      <div>
        <IconButton onClick={() => handleDelete(params)}>
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    );
  };
  const renderCellAddTraining = (params) => {
    return (
      <div>
        <IconButton onClick={() => handleAddTraining(params)}>
          <AddBoxIcon />
        </IconButton>
      </div>
    );
  };

  const columns = [
    { field: 'id', hide: true },
    {
      field: 'edit',
      headerName: 'Edit',
      align: 'center',
      sortable: false,
      width: 100,
      renderCell: renderCellEdit,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      align: 'center',
      sortable: false,
      width: 100,
      renderCell: renderCellDelete,
    },
    {
      field: 'addTraining',
      headerName: 'Add Training',
      align: 'center',
      sortable: false,
      width: 150,
      renderCell: renderCellAddTraining,
    },
    { field: 'firstname', headerName: 'First Name', width: 200 },
    { field: 'lastname', headerName: 'Last Name', width: 200 },
    { field: 'streetaddress', headerName: 'Street Address', width: 200 },
    { field: 'postcode', headerName: 'Postcode', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 200 },
  ];

  console.log(customers);

  const rows = customers
    ?.filter((customer) => customer?.firstname?.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((customer) => ({
      id: customer.links[0].href,
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
    <DataGridDiv open={openLeft}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        columns={columns}
        rows={rows}
        scrollbarSize={0}
      />
      <CustomersForm open={openForm} handleClose={handleCloseForm} onSubmit={onSubmitUpdate} customer={rowData} />
      <RemoveModal removeModal={removeModal} setRemoveModal={setRemoveModal} onSubmitDelete={onSubmitDelete} />
      <TrainingForm
        open={openTraining}
        handleClose={() => setOpenTraining(false)}
        onSubmit={onSubmitTraining}
        customer={rowData}
      />
      <Button variant="contained" style={{ marginTop: '5vh' }}>
        <CSVLink data={customers} style={{ textDecoration: 'none', color: 'white' }}>
          Export Customers
        </CSVLink>
      </Button>
    </DataGridDiv>
  );
};

export default Customers;
