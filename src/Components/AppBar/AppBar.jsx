import React, { useState } from 'react';
import './appBar.css';
import { list } from '../BigScreenAppBar/List';
import { ListMapper } from '../BigScreenAppBar/ListMapper';

export const AppBar = () => {
  const [selected, setSelected] = useState('featured');
  return (
    <div className="AppBar">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark main__app__Bar ">
        <h3 className="text-danger user-text">ArapKirwa.</h3>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  p-2 justify-content-end "
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav justify-content-center d-md-none d-sm-flex d-xs-flex d-lg-none ">
            <li
              className="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a className="nav-link text-primary" href="#">
                Home
              </a>
            </li>
            <li
              className="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a className="nav-link text-primary" href="#about-me">
                AboutMe
              </a>
            </li>
            <li
              className="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a className="nav-link text-primary" href="#">
                Resume
              </a>
            </li>
            <li
              className="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a className="nav-link text-primary" href="#testimaonials">
                Testimonials
              </a>
            </li>
            <li
              className="nav-item text-primary"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <a className="nav-link text-primary" href="#contact-me">
                ContactMe
              </a>
            </li>
          </ul>

          {/* ----------------------------------------------------------Deal Done ---------------- */}
          <ul className="justify-content-center d-none  d-xs-none d-sm-none d-md-flex  d-lg-flex main-secondary">
            {list.map((listItem) => (
              <ListMapper
                key={listItem.id}
                title={listItem.title}
                active={selected === listItem.id}
                setSelected={setSelected}
                id={listItem.id}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
