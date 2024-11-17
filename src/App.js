import { useEffect, useState } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import EventDecoration from './Pages/EventDecoration';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import logo from './logo.png';
import Footer from './Components/Footer/Footer';
import AboutProducts from './Pages/Shop/AboutProducts';
import { LoaderPage } from './Components/Loader/LoaderPage';

function App() {

  const [stateLoader, setStateLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 3000);
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router> {/* Router hier auf oberster Ebene */}
      <div className="App">
        {stateLoader && <LoaderPage />}

        <nav>
          <img src={logo} className="logoImg" alt="My Logo" />
          <Link to="/" className="navElement">Startseite</Link>
          <Link to="/shop" className="navElement">Shop</Link>
          <Link to="/eventDecoration" className="navElement">Event Dekoration</Link>
          <Link to="/about" className="navElement">Über uns</Link>
          <Link to="/contact" className="navElement">Kontakt</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/eventDecoration" element={<EventDecoration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/:title" element={<AboutProducts />} />
        </Routes>

        <Footer /> {/* Footer ist jetzt innerhalb des Router-Kontexts */}
      </div>
    </Router>
  );
}

export default App;
