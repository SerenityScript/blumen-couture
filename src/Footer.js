import React from "react";
import "./Footer.css";
import logo from "./logo.png";
import envelope from "./envelope.png";
import insta from "./instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt='My Logo' className='logoFooter'/>
        <p>&copy; 2000 Blumen Couture</p>
        <p>Alle Rechte vorbehalten.</p>
        <br />
        <p>Entwickelt von SerenityScript</p>
        <p>Zu Lernzwecken</p>
        
      </div>
      <div>
        <h3 >Kontakt</h3>
        <p>Office: Via Montenapoleone 8, Hamburg</p>
        <p>Shop: Viale Loreane 37, Hamburg</p>
        <br />
        <p>Telephone: +49 35 56738</p>
        <p>Fax: +49 35 56738</p>
        <p>Email: blumen@couture.com</p>
        <img src={insta} className="FooterSocialIcon" alt="Sotial Media" />
        <img src={envelope} className="FooterSocialIcon" alt="Email" />
      </div>
      <div>
        <h3 >Info</h3>
        <p>VAT: 658345834734</p>
        <p>Impressum</p>
        <p>Kontakt</p>
        <nav className="footer-nav">
          <a href="/">HOME</a>
          <a href="/shop">SHOP</a>
          <a href="/contact">EVENTS</a>
          <a href="/about">ÜBER UNS</a>
          <a href="/contact">KONTAKT</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;