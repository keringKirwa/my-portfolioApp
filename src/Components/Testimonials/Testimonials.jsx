import React, { useRef } from 'react';

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

import { data } from './data.js';

import './testimonials.css';

export const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div
      className="container-fluid  testimaonials-main-container"
      id="testimaonials"
    >
      <div className="row m-3 testimonials-divider">
        <h2 className="display-4 testimonials-text">Testimonials</h2>

        <div className="oneDiv">
          <div className="one "></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <h5 className="what-my-clients-say text-center">
          What Do My Clients Say ?
        </h5>
      </div>
      {/* -----------DONE ------------------------- */}

      <div className="row w-100 testimonials-main-container d-flex justify-content-center align-items-center">
        <div
          className="app-scrollable-testimonials-container w-100 "
          ref={scrollRef}
        >
          {data.map((data) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 clients-data">
              <div className="portion1 text-center">{data.message}</div>
              <div className="portion2">⭐⭐⭐⭐⭐</div>
              <div className="portion3 d-flex">
                <img src={data.image} alt="client-avatar" />
                <div className="client-name-and-occupation">
                  <h3 className="cormorant client-name">{data.clientName}</h3>
                  <h4 className="cormorant">{data.occupation}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
