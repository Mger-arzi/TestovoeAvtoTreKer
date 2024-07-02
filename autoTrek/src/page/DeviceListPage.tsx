import { ThemeProvider, createTheme } from "@mui/material";
import { MyAppBar } from "../AppBar/AppBar";
import { useState } from "react";

export const DeviceListPage = () => {

  type ThemeMode = 'dark' | 'light'
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const theme = createTheme({
    palette: {
      mode: themeMode === 'light' ? 'light' : 'dark',
      primary: {
        main: '#266cad',
      },
      secondary: {
        main: '#7f3136',
      },

    },
  })
  const changeModeHandler = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <ThemeProvider theme={theme}><MyAppBar changeModeHandler={changeModeHandler} /></ThemeProvider>
      DeviceListPage
    </div>
  );
};