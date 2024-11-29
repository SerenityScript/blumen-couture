import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import EventDecoration from './Pages/EventDecoration';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import logo from './logo.png';
import Footer from './Components/Footer/Footer';
import AboutProducts from './Pages/Shop/AboutProducts';
import { gsap } from 'gsap';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Menu Visibility Management with GSAP
  useEffect(() => {
    if (window.innerWidth < 768) {
      if (menuOpen) {
        gsap.to('.nav-links', {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to('.nav-links', {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            // Erst nach der Animation wird die Sichtbarkeit auf "hidden" gesetzt
            document.querySelector('.nav-links').style.visibility = 'hidden';
          }
        });
      }
    } else {
      // Bei Desktop-Breite werden alle GSAP-Stile entfernt
      gsap.set('.nav-links', { clearProps: 'all' });
    }
  }, [menuOpen]);

  // Clear GSAP styles on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        gsap.set('.nav-links', { clearProps: 'all' });
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-header">
          <img src={logo} className="logoImg" alt="My Logo" />
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Navigation umschalten"
          >
            ☰
          </button>
        </div>
        <div className="nav-links">
          <Link to="/" className={`navElement ${isActive('/') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
            Startseite
          </Link>
          <Link
            to="/shop"
            className={`navElement ${isActive('/shop') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/eventDecoration"
            className={`navElement ${isActive('/eventDecoration') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Event Dekoration
          </Link>
          <Link
            to="/about"
            className={`navElement ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Über uns
          </Link>
          <Link
            to="/contact"
            className={`navElement ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/eventDecoration" element={<EventDecoration />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/:title" element={<AboutProducts />} />
      </Routes>

      <Footer />
        
    </div>
  );
}

export default App;