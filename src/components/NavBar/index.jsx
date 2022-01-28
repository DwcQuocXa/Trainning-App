import React, { useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import Search from './Search';
import PageMenu from './PageMenu';
import { AppBar } from './style';

function NavBar({ openLeft, setOpenLeft }) {
  const handleDrawerOpen = () => {
    setOpenLeft(true);
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
          <Search />
        </Toolbar>
      </AppBar>
      <PageMenu open={openLeft} setOpen={setOpenLeft} />
    </Box>
  );
}

export default React.memo(NavBar);
