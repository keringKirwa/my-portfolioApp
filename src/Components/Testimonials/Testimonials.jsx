import React, { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import { data } from './data.js';
import './testimonials.css';

export const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  };

  return (
    <div
      className="container-fluid  app-testimaonials-clients-container"
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

      <div className=" d-flex w-100 justify-content-center align-items-center position-relative">
        <div className="d-flex justify-content-center position-relative">
          <div
            className="pseudoContainer d-flex app-scrollable-testimonials-container w-100 "
            ref={scrollRef}
          >
            {data.map((data) => (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 clients-data text-info "
                id={data.clientName === 'Mldred Omanga' ? 'last' : ''}
              >
                <div className="portion1 text-center text-dark">
                  <FaQuoteLeft className="text-secondary fa-qleft-icon" />
                  {data.message}
                  <FaQuoteRight className="fa-right-icon text-secondary m3 d-sm-none d-none d-lg-block d-md-block d-xl-block" />
                </div>
                <div className="portion2">⭐⭐⭐⭐⭐</div>
                <div className="portion3 d-flex">
                  <img
                    src={data.image}
                    alt="client-avatar"
                    className="ceoimage"
                  />
                  <div className="client-name-and-occupation">
                    <h3 className="cormorant client-name">{data.clientName}</h3>
                    <h4 className="cormorant">{data.occupation}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows d-flex justify-content-between ">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll('left')}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon "
              onClick={() => scroll('right')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
