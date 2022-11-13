import { Box, styled, CircularProgress } from '@mui/material';
import AdminLoginCover from '../../../assets/images/admin-login-cover.jpg';

export const BoxImage = styled(Box)(({ theme }) => ({
  height: '100vh',
  flex: 2,
  background: `url(${AdminLoginCover}) center center`,
  backgroundSize: 'cover',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const BoxWrapper = styled(Box)(({ theme }) => ({
  margin: '100px auto',
  padding: '32px',

  [theme.breakpoints.up('lg')]: {
    flex: 1,
    padding: '32px 10rem',
  },
  [theme.breakpoints.up('sm')]: {
    width: '540px',
  },
}));

export const CircularProgressItem = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.white,
}));
