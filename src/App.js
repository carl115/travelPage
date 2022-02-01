import React from 'react';

import Header from './components/header';
import Inicio from './components/Inicio';
import Ofertas from './components/Ofertas';
import SobreN from './components/SobreNosotros';


function App() {
  return (
    <div className="App">
      <Header/>
      <Inicio/>
      <Ofertas/>
      <SobreN/>
    </div>
  );
}

export default App;
