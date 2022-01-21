import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';

import Search from './Search';
import { AppBar } from './styles';
import { Link } from 'react-router-dom';

function NavBar({ open, setOpen }) {
  //const color = useAppSelector((state) => state.switchTheme.color);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' open={open}>
        <Toolbar>
          {/* <SwitchTheme open={open} setOpen={setOpen} /> */}
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              Personal Trainer
            </Link>
            <PublicIcon />
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default React.memo(NavBar);
