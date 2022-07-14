import React from 'react';
import './appBar.css';

export const AppBar = () => {
  return (
    <div className="AppBar">
      <nav class="navbar navbar-expand-md bg-dark navbar-dark ">
        <h3 className="text-danger user-text">ArapKirwa.</h3>
        <button
          class="navbar-toggler text-danger"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  p-2 justify-content-end "
          id="collapsibleNavbar"
        >
          <ul class="navbar-nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link text-primary" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary" href="#about-me">
                AboutMe
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary" href="#">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary" href="#">
                Testimonial
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary" href="#contact-me">
                ContactMe
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
