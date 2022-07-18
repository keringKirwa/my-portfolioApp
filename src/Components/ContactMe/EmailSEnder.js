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
        toast.remove();
        toast.success('Success.Thanks For contacting Kirwa.', {
          duration: 5000,
        });
        clearForm();
      },
      (error) => {
        toast.remove();
        toast.error(
          'Oops!It seems Something went wrong.PLease check your internet connection.Thank You',
          { duration: 5000 }
        );
        return;
      }
    );
};
