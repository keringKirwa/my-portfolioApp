import React, { useState } from 'react';
import './contactme.css';
import Typical from 'react-typical';

const initialStateData = {
  email: '',
  userName: '',
  message: '',
};

export const ContactMe = () => {
  const [userEntries, setUserEntries] = useState(initialStateData);

  const handleChange = (e) => {
    setUserEntries({ ...userEntries, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    /* TODO: VALIDATE USER DETAILS */

    console.log(userEntries);
    setUserEntries((prevUserEntries) => ({
      ...prevUserEntries,
      ...initialStateData,
    }));
    console.log(userEntries);
  };

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
              name="userName"
              required
              onChange={handleChange}
              defaultValue={initialStateData.userName}
            ></input>

            <input
              type="email"
              name="email"
              required
              className="email-input text-info cormorant"
              placeholder="Email Address"
              onChange={handleChange}
              defaultValue={initialStateData.email}
            ></input>
            <textarea
              className="message-input cormorant "
              name="message"
              rows="3"
              placeholder="Enter Your Message Here ..."
              onChange={handleChange}
              defaultValue={initialStateData.message}
            ></textarea>
            <button
              class="btn btn-hire-me m-1  contact-button-submit"
              type="button"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      {/* ---- */}
      <p className="text-center w-100 text-primary mt-1 display-5 cormorant fa-copyright">
        Created by Kering~Kirwa. © 2020
      </p>
    </div>
  );
};
