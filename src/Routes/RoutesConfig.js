import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import EventDecoration from '../Pages/EventDecoration';
import Shop from '../Pages/Shop/Shop';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import AboutProducts from '../Pages/Shop/AboutProducts';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/eventDecoration" element={<EventDecoration />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about/:title" element={<AboutProducts />} />
    </Routes>
  );
};

export default RoutesConfig;