"use client"
import { createTheme } from '@mui/material/styles';


const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: '#68A7B9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#7B7979',
      contrastText: '#fff',
    },
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
    // h1: {
    //   color: "#7B7979"
    // }
  },
});

export default DefaultTheme;