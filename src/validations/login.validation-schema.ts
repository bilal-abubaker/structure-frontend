import * as Yup from 'yup';

const loginValidationSchema = Yup.object({
  username: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  remember: Yup.boolean(),
});

export { loginValidationSchema };
