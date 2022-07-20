import React from 'react';
import { Button } from '../Button/Button';
import './resume.css';

export const Resume = () => {
  return (
    <div className="container-fluid app-resume-section">
      <div className="col-4 left-small-container w-100">
        <Button></Button>
      </div>

      <div className="col-8 resume-right-main-container">
        <div className="first " id="first"></div>
        <div className="second" id="second"></div>
        <div className="third" id="third"></div>
      </div>
    </div>
  );
};
