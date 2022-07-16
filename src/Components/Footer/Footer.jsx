import React from 'react';
import Typical from 'react-typical';

import './footer.css';

export const Footer = () => (
  <div className="app__newsletter bg-dark mt-4">
    <div className="app__newsletter-heading">
      <h3 className="cormorant">Contact Me</h3>
      <h1 className="headtext__cormorant cormorant">
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
      </h1>
    </div>
    <div className="app__newsletter-input d-flex justify-content-center align-items-center">
      <input
        type="email"
        placeholder="Enter your email address bg-muted text-warning"
      />

      <button
        class="btn btn-hire-me contact-button-submit button-footer"
        type="button"
      >
        SUBMIT
      </button>
    </div>
  </div>
);
