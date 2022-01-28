import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TodayIcon from '@mui/icons-material/Today';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { DrawerHeader, useStyles, Drawer } from './style';

export default function PageMenu({ open, setOpen }) {
  const theme = useTheme();
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant='permanent' open={open} className={classes.root}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link
          to='/customers'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Customers</ListItemText>
          </ListItem>
        </Link>

        <Link
          to='/trainings'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button>
            <ListItemIcon>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText>Trainings</ListItemText>
          </ListItem>
        </Link>

        <Link
          to='/calendar'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItem button>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>
            <ListItemText>Calendar</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Drawer>
  );
}
