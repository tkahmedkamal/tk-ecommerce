import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1479FF',
      light: '#4393ff',
      dark: '#0e54b2',
    },
    secondary: {
      main: '#14D2FF',
      light: '#43dbff',
      dark: '#0e93b2',
    },
    accent1: {
      main: '#D50000',
      light: '#FFEBEE',
    },
    accent2: {
      main: '#F57F17',
      light: '#FFFDE7',
    },
    accent3: {
      main: '#00C853',
      light: '#E8F5E9',
    },
    text: {
      primary: '#161819',
      secondary: '#8C8C8C',
    },
    white: '#fff',
    divider: '#EFF1F5',
    background: {
      paper: '#EFF1F5',
    },
  },
  typography: {
    fontFamily: 'Work Sans, Roboto, Helvetica, Arial, sans-serif',
  },
  shape: {
    borderRadius: 24,
    borderRadiusMd: 14,
    borderRadiusSm: 12,
    borderRadiusXs: 8,
  },
});

export default theme;
