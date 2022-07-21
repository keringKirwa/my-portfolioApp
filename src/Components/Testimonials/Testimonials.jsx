import React, { useRef, useEffect, useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { urlFor } from '../../sanity';
import './testimonials.css';
import client from '../../client';


export const Testimonials = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == 'post' && approved == true]{
      _id,
      author->{
      name,
      image,
      company,
      position,
    },
    body,
    approved 
    
    }`).then((data) => {
      setPostData(data);
    }
    ).catch(error => console.log(error))
  }, []);

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
            {postData.map((data) => (
              <div key={data._id}
                className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 clients-data text-info "
                id={data.clientName === 'Mldred Omanga' ? 'last' : ''}
              >
                <div className="portion1 text-center text-dark">

                  <FaQuoteLeft className="fa-qleft-icon" />
                  {data.body}

                  <FaQuoteRight className="fa-right-icon text-secondary m3 d-sm-none d-none d-lg-block d-md-block d-xl-block" />
                </div>
                <div className="portion2">⭐⭐⭐⭐⭐</div>
                <div className="portion3 d-flex">
                  <img
                    src={urlFor(data.author.image).url()}
                    alt="client-avatar"
                    className="ceoimage"
                  />
                  <div className="client-name-and-occupation">
                    <h3 className="cormorant client-name">{data.author.name}</h3>
                    <h4 className="cormorant">{data.author.position}- {data.author.company} </h4>
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
