import React from 'react';
import { Formik, Form, Field } from 'formik';

import './formik.css';
import { SignUpSchema } from './Yup.js';
import toast from 'react-hot-toast';

export const UserContactMeForm = () => {
  return (
    <div className="w-100">
      <Formik
        initialValues={{
          userName: '',
          email: '',
          message: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          toast.success('Success.Thanks For Contacting Kirwa!');
          resetForm();
        }}
      >
        {({ errors, touched, dirty, isValid, resetForm }) => (
          <Form className="formikForm form-with-input-data" autoComplete="off">
            <Field
              name="userName"
              id={touched.userName && !errors.userName ? 'success' : ''}
              as="input"
              className={
                errors.userName && touched.userName
                  ? 'input-error username-input text-danger cormorant'
                  : 'username-input cormorant'
              }
            />
            {touched.userName && errors.userName && (
              <div className="text-danger">{errors.userName}</div>
            )}

            <Field
              name="email"
              placeholder="Email Address"
              as="input"
              id={touched.email && !errors.email ? 'success' : ''}
              className={
                touched.email && errors.email
                  ? 'input-error email-input text-danger cormorant'
                  : 'email-input  cormorant'
              }
            />
            {touched.email && errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}

            <Field
              name="message"
              id={touched.message && !errors.message ? 'success' : ''}
              as="textarea"
              placeholder="Enter Your Message Here..."
              className={
                errors.message && touched.message
                  ? 'input-error message-input text-danger cormorant'
                  : 'message-input cormorant'
              }
            />

            {touched.message && errors.message && (
              <div className="text-danger">{errors.message}</div>
            )}
            <button
              type="submit"
              className={
                !(dirty && isValid)
                  ? 'disbaled-button cormorant'
                  : 'app__contact-button-submit bg-dark text-info'
              }
              disabled={!(dirty && isValid)}
            >
              SUBMIT ✔️
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
