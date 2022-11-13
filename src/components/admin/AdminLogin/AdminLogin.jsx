import {
  Stack,
  Box,
  Button,
  InputAdornment,
  styled,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import FieldInput from '../../common/Field/FieldInput';
import { BoxImage, BoxWrapper, CircularProgressItem } from './AdminLoginStyled';
import { loginSchema } from '../../../schemas/AuthSchema';
import 'remixicon/fonts/remixicon.css';

const AdminLogin = () => {
  const handleSubmit = async (values, actions) => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(values);
        console.log(values);
      }, 5000)
    );
  };

  const SubmitButton = styled(Button)(({ theme }) => ({
    borderRadius: `${theme.shape.borderRadiusSm}px`,
    fontSize: '18px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.black,
    },

    [theme.breakpoints.down('lg')]: {
      padding: '17.8px',
    },

    [theme.breakpoints.up('md')]: {
      padding: '20.4px',
    },
  }));

  return (
    <Stack display='flex' flexDirection='row'>
      <BoxImage></BoxImage>
      <BoxWrapper>
        <Box mb={4} textAlign='center'>
          <Typography
            variant='h3'
            component='h2'
            fontWeight='600'
            textTransform='capitalize'
            mb={1.5}
          >
            login
          </Typography>
          <Typography variant='body1'>
            Enter your email and password to access the dashboard
          </Typography>
        </Box>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <FieldInput
                type='email'
                id='email'
                label='Email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                startAdornment={
                  <InputAdornment position='start'>
                    <i className='ri-at-line'></i>
                  </InputAdornment>
                }
              />
              <FieldInput
                type='password'
                id='password'
                label='Password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                startAdornment={
                  <InputAdornment position='start'>
                    <i className='ri-lock-password-line'></i>
                  </InputAdornment>
                }
              />
              <SubmitButton
                variant='contained'
                type='submit'
                fullWidth
                disableElevation
                startIcon={isSubmitting && <CircularProgressItem size={25} />}
                disabled={isSubmitting && true}
              >
                Login
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </BoxWrapper>
    </Stack>
  );
};

export default AdminLogin;
