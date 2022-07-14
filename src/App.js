import { ContactMe } from './Components/ContactMe/ContactMe';
import { Home } from './Components/AppBar/Home/Home';
import './app.css';

import { AppBar } from './Components/AppBar/AppBar';
import { AboutMe } from './Components/AboutMe/AboutMe';
function App() {
  return (
    <div>
      <AppBar />
      <Home />
      <AboutMe />

      <ContactMe />
    </div>
  );
}

export default App;
