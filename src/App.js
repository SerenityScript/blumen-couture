import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import RoutesConfig from './Routes/RoutesConfig';

function App() {

  return (
    <div className="App">
      <Navbar />
      <RoutesConfig />
      <Footer />
    </div>
  );
}

export default App;