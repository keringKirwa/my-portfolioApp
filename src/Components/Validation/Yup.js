import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'userName too Short!')
    .max(10, 'userName too Long!')
    .required('Firstname is required !'),

  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i, 'Invalid Email !')
    .required('Email is required !'),

  message: Yup.string()
    .min(5, 'Message too short !')
    .max(100, 'Message too long !')
    .required('message required !'),
});
