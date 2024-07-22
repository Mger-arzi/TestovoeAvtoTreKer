import { createTheme, ThemeProvider } from '@mui/material';
import { Router } from './router/router-config'
import { MyAppBar } from './AppBar/AppBar';
import { useState } from 'react';

export function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#e3dcdc',
      },
    },
  });

  const changeModeHandler = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeProvider theme={theme}>
      <MyAppBar changeModeHandler={changeModeHandler} />
      <Router />
    </ThemeProvider>)
}
