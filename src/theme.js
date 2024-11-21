import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#fbc02d',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

export default theme;
