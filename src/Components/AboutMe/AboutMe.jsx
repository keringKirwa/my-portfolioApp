import React from 'react';
import './aboutMe.css';
import java from '../../images/kirwa_files/java.png';
import spring from '../../images/kirwa_files/spring.png';
import reactIcon from '../../images/kirwa_files/react.svg';

export const AboutMe = () => {
  return (
    <div className="container-fluid  app-about-me-container" id="about-me">
      {/* ----------one -------------------- */}

      <div className="row m-3 about-me-divider">
        <h2 className="display-4">About Me </h2>

        <div className="oneDiv">
          <div className="one "></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <br />
        <h3 className="display-5">Why Choose Me ?</h3>
      </div>

      {/* ----------two */}

      <div className="row about-me-main-section flex-wrap-reverse">
        {/* -------------------------------- */}
        <div className="about-me-left col-12 col-sm-12 col-l-6 col-l-6 col-xl-6  text-center">
          <div className="specialization">
            <h3 className=" intro-specialization text-capitalize">
              gaining more interest and Experiance in the following technologies{' '}
            </h3>
          </div>
          <div className="java-spring-tool">
            <img src={java} alt="Java" />
            <img src={spring} alt="Spring boot" />
            <img src={reactIcon} alt="React Js" />
          </div>
          <h4>
            A <span className="text-danger">Pro</span> also in plain CSS, HTML,
            BootstrapCss,MongoDb,NodeJs, ExpressJs and Heroku for Deployment .
          </h4>
        </div>
        {/* --------------------------------- */}

        <div className="col-12 col-sm-12 col-l-6 col-l-6 col-xl-6 ">
          <h4 className="diplay-4 text-capitalize  text-center about-me-title">
            {' '}
            Am a Passionate{' '}
            <span className="text-dark">
              {' '}
              Full<span className="text-info-langugaes">Stack</span> Web
              Developer,
            </span>
          </h4>
          <p className="app-aboutMe-p-main display-4 text-center">
            with a solid knowledge in
            <span className="text-info-langugaes">
              {' '}
              JavaScript,Java & mySQL.
            </span>{' '}
            Alongside these programming languages, I understand very well how to
            use their respective frameworks to come up with a Perfect replica of
            a good design. Am a Strong professional with a Bsc. Degree in
            Computer Science from JKUAT, and now willing to be an asset for an
            organization.
          </p>
          <div className="buttons d-flex flex-direction-column  ">
            <a href="#contact-me">
              <button class="btn btn-hire-me m-1" type="button">
                Hire Me
              </button>
            </a>
            <a href="#last">
              <button class="btn btn-hire-me m-1" type="button">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
