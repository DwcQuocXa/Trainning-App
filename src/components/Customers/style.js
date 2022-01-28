import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

export default makeStyles(() => ({
  loading: {
    marginLeft: '48%',
    marginTop: '18%',
  },
}));

export const DataGridDiv = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  paddingTop: '5%',
  height: 600,
  width: '80%',
  margin: 'auto',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 300,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
