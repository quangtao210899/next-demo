"use client"
import { createTheme } from '@mui/material/styles';


const DefaultTheme = createTheme({
  palette: {
    primary: {
      light: '#68A7B9',
      main: '#68A7B9',
      dark: '#68A7B9',
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: 'Noto Sans JP',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    allVariants: {
      color: "#68A7B9"
    },
  },

});

export default DefaultTheme;