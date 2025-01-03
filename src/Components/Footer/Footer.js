import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import envelope from "../../Assets/envelope.png";
import insta from "../../Assets/instagram.png";
import { navLinks } from "../../data/data";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="Row">

        <div>
          <h3>Öffnungszeiten</h3>
          <p>Mo: 8:00 - 19:00</p>
          <p>Di: 8:00 - 19:00</p>
          <p>Mi: 8:00 - 19:00</p>
          <p>Do: 8:00 - 19:00</p>
          <p>Fr: 8:00 - 19:00</p>
        </div>

        <div>
          <h3>Kontakt</h3>
          <p>Adresse: Loreane 37, Hamburg</p>
          <p>Telephone: +49 35 56738</p>
          <p>Fax: +49 35 56738</p>
          <p>Email: blumen@couture.com</p>
          <div>
            <img src={insta} className="FooterSocialIcon" alt="Social Media" />
            <img src={envelope} className="FooterSocialIcon" alt="Email" />
          </div>
        </div>

        <div>
          <h3>Info</h3>
          <p>VAT: 658345834734</p>
          <p>Impressum</p>
          <p>Datenschutz</p>
        </div>

        <div className="footer-nav">

          <h3>Menü</h3>

          {navLinks.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="footer-nav-button"
              aria-label={`Gehe zu ${link.label}`}
            >
              {link.label}
            </Link>
          ))}

        </div>
      </div>
        
        <div className="LogoDiv">
          <img src={logo} alt="My Logo" className="logoFooter" />
          <p className="FooterParDown">&copy; 2000 Blumen Couture. Alle Rechte vorbehalten.</p>
          <p className="FooterParDown">Alle Bilder von Unsplash. Alle Icons von Freepik.</p>
          <p className="FooterParDown">Entwickelt von <a href="https://github.com/SerenityScript" target="_blank" rel="noreferrer">SerenityScript</a> für die Lernzwecke.</p>
        </div>
      
    </footer>
  );
};

export default Footer;