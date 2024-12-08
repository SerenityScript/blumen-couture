import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { gsap } from 'gsap';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Menu Visibility Management with GSAP
  useEffect(() => {
    if (window.innerWidth < 820) {
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
      if (window.innerWidth >= 820) {
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
    <div>
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
    </div>
  )
}

export default Navbar;