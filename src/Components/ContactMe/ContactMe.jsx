import React from 'react';
import './contactme.css';
import Typical from 'react-typical';

export const ContactMe = () => {
  return (
    <div className="CON-CON" id="contact-me">
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
          <h2 className="you-can-also cormorant text-center">
            You can also reach me via:
          </h2>
          <h3 className="cormorant text-info">email: kkirwa230@gmail.com</h3>
          <h3 className="cormorant text-info">📞+254793003495</h3>
        </div>
        <div className="col col-12 col-l-7 col-xl-7 d-flex contact-me-form-container">
          <div className="d-flex flex-column controls-container">
            <h2 className="text-capitalize text-center display-sm-5 display-5 mt-2 contact-typical-text">
              <Typical
                className="contact-me-typical-component cormorant"
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
            <input
              className="username-input text-info cormorant"
              type="text"
              placeholder="Username"
              id="fName"
              required
            ></input>

            <input
              type="email"
              required
              className="email-input text-info cormorant"
              placeholder="Email Address"
            ></input>
            <textarea
              className="message-input cormorant "
              rows="3"
              placeholder="Enter Your Message Here ..."
            ></textarea>
            <button
              class="btn btn-hire-me m-1  contact-button-submit"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
