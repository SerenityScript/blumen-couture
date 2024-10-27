import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import EventDecoration from './EventDecoration';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import logo from './logo.png';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <img src={logo} className='logoImg' alt='My Logo' />
          <Link to="/" className='navElement'>Home</Link>
          <Link to="/eventDecoration" className='navElement'>Event Decoration</Link>
          <Link to="/shop" className='navElement'>Shop</Link>
          <Link to="/about" className='navElement'>About</Link>
          <Link to="/contact" className='navElement'>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventDecoration" element={<EventDecoration />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />

      
      
      
    </div>
  );
}

export default App;
