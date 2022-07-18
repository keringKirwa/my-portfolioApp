import React from 'react';
import { ContactMe } from './Components/ContactMe/ContactMe';
import { Home } from './Components/AppBar/Home/Home';
import './app.css';

import { AppBar } from './Components/AppBar/AppBar';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { Testimonials } from './Components/Testimonials/Testimonials';
import { Toaster } from 'react-hot-toast';
import { Resume } from './Components/Resume/Resume';
function App() {
  return (
    <div className="MAIN-DIV-SUPER-CONTAINER">
      <Toaster reverseOrder={false} />
      <AppBar />
      <Home />
      <AboutMe />
      <Testimonials />
      <ContactMe />
    </div>
  );
}

export default App;
