import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

export const sendEmail = (messageObject, clearForm) => {
  const newEmailObject = { ...messageObject, owner: 'Kirwa kelvin' };
  emailjs
    .send(
      'service_rmzkv09',
      'template_8hpr0cw',
      newEmailObject,
      'bL2kHjjWZgLj2rlyF'
    )
    .then(
      (result) => {
        console.log(result);
        toast.success('Success.Thanks For contacting Kirwa.');
        clearForm();
      },
      (error) => {
        console.log(error.text);
        toast.error('An Error occured in sending Email.');
        clearForm();
      }
    );
};
