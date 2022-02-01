import React from 'react';

import Header from './components/header';
import Inicio from './components/Inicio';
import Ofertas from './components/Ofertas';
import SobreN from './components/SobreNosotros';
import MasInfo from './components/MasInformacion';

function App() {
  return (
    <div className="App">
      <Header/>
      <Inicio/>
      <Ofertas/>
      <SobreN/>
      <MasInfo/>
    </div>
  );
}

export default App;
