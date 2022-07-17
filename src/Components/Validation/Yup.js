import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Firstname is required !'),

  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i, 'Invalid Email')
    .required('Email is required !'),

  message: Yup.string()
    .min(20, 'message too short')
    .max(100, 'Message too long')
    .required('message required !'),
});
