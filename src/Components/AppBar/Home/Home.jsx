import React from 'react';
import Typical from 'react-typical';
import image from '../../../images/kirwa_files/download.png';
import user from '../../../images/kirwa_files/IMG_20210510_214813.jpg';
import './home.css';

export const Home = () => {
  return (
    <div className="container-fluid pt-5 mt-5  home" id="home">
      <div className="row d-flex align-items-center justify-content-center flex-wrap-reverse">
        {/* -----column------------------ */}

        <div className="col-12 col-sm-12 col-md-12 col-l-7 col-xl-7 d-flex flex-column align-items-center  mt-3 app-home-left position-relative mt-4 pl-5 ">
          <div className="who-am-i text-white d-flex flex-column w-100 jsutify-content-center align-items-center">
            <span className=" display-5 m-lg-3 text-center text-secondary ">
              <span className="hello-text"> Hello </span>? Am{' '}
              <span className="text-danger align-items-center display-4 italicText ">
                Kirwa
              </span>
            </span>

            <h1 className="d-lg-none d-md-none d-sm-flex d-flex text-center text-dark">
              Skilled In :
            </h1>
            <h1 className="d-lg-block d-md-block d-sm-none d-none enlightened-text">
              Enlightened By The Spirit Of Coding ...
            </h1>

            <Typical
              className="typical typical-component"
              steps={[
                'FullStack Dev.💻',
                3000,
                'Java~BackEnd Dev.☕',
                3000,
                'ReactJS~FrontEnd Dev.',
                3000,
                'ExpressJs~ Dev.🖱️',
                3000,
                'BootstrapCss~UI Dev.',
                3000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>

          <div className="buttons d-flex flex-direction-column  ">
            <a href="#contact-me" role="button">
              <button class="btn btn-hire-me m-1" type="button">
                Hire Me
              </button>
            </a>
            <button class="btn btn-get-resume-me m-1" type="button">
              Get Resume
            </button>
          </div>
        </div>

        {/* -------------------------------------------------- */}

        <div className="col col-12 col-sm-12 col-md-12 col-l-5 col-xl-5 home-image-container ">
          <img
            src={user}
            alt=""
            className="img-responsive image-portfolio text-fluid"
          />
        </div>
      </div>
      <div className="col col-12 col-sm-12 col-md-12 col-12 d-none d-lg-flex  d-sm-flex app-footer-background ">
        <img
          src={image}
          alt=""
          className="img-responsive  text-fluid d-none d-xl-block"
        />
      </div>
    </div>
  );
};
