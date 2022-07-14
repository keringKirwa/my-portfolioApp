import React from 'react';
import './contactme.css';
import Typical from 'react-typical';
import handdShake from '../../images/kirwa_files/handShake.webp';

export const ContactMe = () => {
  return (
    <div
      className="container-fluid  contact-me-main-container "
      id="contact-me"
    >
      <div className="row m-3 contact-me-divider">
        <h2 className="display-4">Contact Me </h2>

        <div className="oneDiv">
          <div className="one "></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <br />
      </div>

      <div className="row contact-form-container bg-dark  ">
        <div className="col-l-5 col-xl-5 d-none d-md-none d-lg-block d-xl-block ">
          <img src={handdShake} alt="handshake" className="handshake-image " />
        </div>
        <form className="col-12 col-sm-12 col-l-7 col-xl-7 d-flex flex-column contact-me-form">
          <h2 className="text-capitalize text-center display-sm-5 display-5 mt-2 contact-typical-text">
            <Typical
              className="contact-me-typical-component"
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
            type="text"
            class="form-control "
            placeholder="Username"
            aria-describedby="inputGroupPrepend3"
            required
          ></input>
          <input
            type="email"
            required
            class="form-control "
            id="validationServerUsername"
            placeholder="Email Address"
            aria-describedby="inputGroupPrepend3"
          ></input>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button
            class="btn btn-hire-me m-1  contact-button-submit"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
