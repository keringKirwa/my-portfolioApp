import React from 'react';
import { Formik, Form, Field } from 'formik';

import './formik.css';
import { SignUpSchema } from './Yup.js';

export const UserContactMeForm = () => {
  const handleSubmit = (userEntries) => {
    console.log(userEntries);
  };

  return (
    <div className="w-100">
      <Formik
        initialValues={{
          userName: '',
          email: '',
          message: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          handleSubmit(values);
          console.log('data submitted successfully . congratulatiosn !!');
        }}
      >
        {({ errors, touched, dirty, isValid }) => (
          <Form className="formikForm form-with-input-data" autoComplete="off">
            <Field
              name="userName"
              className={
                errors.userName
                  ? 'input-error username-input text-danger cormorant'
                  : 'username-input cormorant'
              }
              as="input"
            />
            {touched.userName && errors.userName && (
              <div className="text-danger">{errors.userName}</div>
            )}

            <Field
              name="email"
              placeholder="Email Address"
              as="input"
              className={
                errors.email
                  ? 'input-error email-input text-danger cormorant'
                  : 'email-input  cormorant'
              }
            />
            {touched.email && errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}

            <Field
              name="message"
              as="textarea"
              placeholder="Enter Your Message Here..."
              className={
                errors.message
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
