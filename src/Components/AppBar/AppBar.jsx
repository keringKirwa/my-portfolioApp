import React from 'react';
import './appBar.css';

export const AppBar = () => {
  return (
    <div className="AppBar">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark main__app__Bar ">
        <h3 className="text-danger user-text">ArapKirwa.</h3>
        <button
          class="navbar-toggler "
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
          <ul class="navbar-nav justify-content-center d-md-none d-sm-flex d-xs-flex d-lg-none">
            <li
              class="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a class="nav-link text-primary" href="#">
                Home
              </a>
            </li>
            <li
              class="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a class="nav-link text-primary" href="#about-me">
                AboutMe
              </a>
            </li>
            <li
              class="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a class="nav-link text-primary" href="#">
                Resume
              </a>
            </li>
            <li
              class="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a class="nav-link text-primary" href="#testimaonials">
                Testimonials
              </a>
            </li>
            <li
              class="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a class="nav-link text-primary" href="#contact-me">
                ContactMe
              </a>
            </li>
          </ul>

          {/* ----------------------------------------------------------Deal Done ---------------- */}
          <ul class="justify-content-center d-none  d-xs-none d-sm-none d-md-flex  d-lg-flex">
            <li class="nav-item">
              <a class="nav-link text-primary" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary" href="#about-me">
                AboutMe
              </a>
            </li>
            <li class="nav-item">
              <a class="text-primary nav-link text-primary" href="#">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a
                class="text-primary nav-link text-primary"
                href="#testimaonials"
              >
                Testimonials
              </a>
            </li>
            <li class="nav-item nav-link text-primary">
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
