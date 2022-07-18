import React from 'react';
import './resume.css';

export const Resume = () => {
  return (
    <div className="container-fluid app-resume-section">
      <div className="col-4 left-small-container">
        <a href="#first">
          <button class="btn btn-hire-me m-1" type="button">
            Hire Me
          </button>
        </a>
        <a href="#second" role="button">
          <button class="btn btn-hire-me m-1" type="button">
            Hire Me
          </button>
        </a>
        <a href="#third" role="button">
          <button class="btn btn-hire-me m-1" type="button">
            Hire Me
          </button>
        </a>
      </div>

      <div className="col-8 resume-right-main-container">
        <div className="first " id="first"></div>
        <div className="second" id="second"></div>
        <div className="third" id="third"></div>
      </div>
    </div>
  );
};
