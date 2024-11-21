import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Page from './components/Page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
}

export default App;
