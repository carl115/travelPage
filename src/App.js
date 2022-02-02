import React from 'react';
import './App.css';

import Header from './components/header';
import Inicio from './components/Inicio';
import Ofertas from './components/Ofertas';
import SobreN from './components/SobreNosotros';
import MasInfo from './components/MasInformacion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Inicio/>
      <Ofertas/>
      <SobreN/>
      <MasInfo/>
      <Footer/>
    </div>
  );
}

export default App;