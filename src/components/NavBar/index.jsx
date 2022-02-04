import React, { useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';

import Search from './Search';
import PageMenu from './PageMenu';
import { AppBar } from './style';
import CustomersForm from '../CustomersForm';
import { createCustomer, getCustomers } from '../../redux/actions';

function NavBar({ openLeft, setOpenLeft }) {
  const [openForm, setOpenForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpenLeft(true);
  };
  const handleCloseForm = () => setOpenForm(false);
  const handleOpenForm = () => setOpenForm(true);

  const onSubmitCreate = (newCustomer) => {
    dispatch(createCustomer(newCustomer));
    handleCloseForm();
    dispatch(getCustomers());
    navigate(`/customers`);
    window.location.reload();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={openLeft}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: '36px',
              ...(openLeft && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              Personal Trainer
            </Link>
          </Typography>
          <IconButton sx={{ color: 'white' }} onClick={handleOpenForm}>
            <AddIcon />
          </IconButton>

          <CustomersForm
            open={openForm}
            handleClose={handleCloseForm}
            onSubmit={onSubmitCreate}
          />
          <Search />
        </Toolbar>
      </AppBar>
      <PageMenu open={openLeft} setOpen={setOpenLeft} />
    </Box>
  );
}

export default React.memo(NavBar);
