import React from 'react';

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
      <div className="Ofertas">
        <Ofertas img="../src/img/pexels-julius-silver-753626.jpg" textImg="producto1"/>
        <Ofertas img="../src/img/pexels-max-ravier-3331064.jpg" textImg="producto2"/>
        <Ofertas img="../src/img/pexels-oliver-sjöström-1078983.jpg" textImg="producto3"/>
        <Ofertas img="../src/img/pexels-oliver-sjöström-1433052.jpg" textImg="producto4"/>
        <Ofertas img="../src/img/pexels-pixabay-237272.jpg" textImg="producto5"/>
        <Ofertas img="../src/img/pexels-pixabay-38238.jpg" textImg="producto6"/>
      </div>
      <SobreN/>
      <MasInfo/>
      <Footer/>
    </div>
  );
}

export default App;
