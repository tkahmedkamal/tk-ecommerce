import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  password: yup
    .string()
    .min('6', 'Password must contain 6 or more characters')
    .required(),
});
