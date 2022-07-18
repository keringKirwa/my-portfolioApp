import React from 'react';
import './contactme.css';
import Typical from 'react-typical';
import { UserContactMeForm } from '../Validation/FormikValidation';
import { FaGithubAlt } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
/* Links for the above icons : https://react-icons.github.io/react-icons/search?q=email */
export const ContactMe = () => {
  return (
    <div className="CON-CON " id="contact-me">
      <div className="row m-3 contact-me-divider">
        <h2 className="display-4 testimonials-text">Contact Me </h2>

        <div className="oneDiv">
          <div className="one "></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <br />
      </div>

      <div className="row app-main-contact-container bg-dark flex-wrap-reverse">
        <div className="col-12 col-l-5 col-xl-5 left-content">
          <h2 className="you-can-also cormorant text-center ">
            You can also reach me via:
          </h2>
          <h3 className="cormorant text-info">email: kkirwa230@gmail.com</h3>
          <h3 className="cormorant text-info">📞+254793003495</h3>
          <p className="official-handles text-info cormorant">
            Official social-media Hanldes @
          </p>
          <div className="react-social-icons text-center w-100  bg-dark m-0 d-flex justify-content-center align-items-center text-info">
            <a href="https://github.com/keringKirwa/keringKirwa">
              <FaGithubAlt className="media-item" />
            </a>
            <a href="mailto:kkirwa230@gmail.com">
              <AiTwotoneMail className="media-item" />
            </a>
            <a href="https://www.linkedin.com/in/kirwa-kering/">
              <BsLinkedin className="media-item" />
            </a>
          </div>
        </div>
        <div className="col col-12 col-l-7 col-xl-7 d-flex contact-me-form-container">
          <div className="d-flex flex-column controls-container">
            <h2 className="text-capitalize text-center display-sm-5 display-5 mt-2 contact-typical-text">
              <Typical
                className="cormorant"
                steps={[
                  'lets build sth.great,',
                  3000,
                  'Email Me and,',
                  1000,
                  'Get Your job done.✔️',
                  3000,
                  'lets get in touch',
                  3000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h2>
            <UserContactMeForm />
          </div>
        </div>
      </div>
      {/* ---- */}
      <p className="text-center w-100 text-info  display-5 cormorant fa-copyright-text bg-dark m-0 d-flex flex-row justify-content-center">
        Copyrights© 2022,
        <p className="all-rights">all rights Reserved,By Kirwa Kelvin.</p>
      </p>
    </div>
  );
};
