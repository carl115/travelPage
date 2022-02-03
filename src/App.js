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
      <div className="Ofertas">
        <Ofertas 
          img={require('./img/pexels-julius-silver-753626.jpg')} 
          nameImg={'producto1'}
        />
        <Ofertas 
          img={require('./img/pexels-max-ravier-3331064.jpg')} 
          nameImg={'producto2'}
        />
        <Ofertas 
          img={require('./img/pexels-oliver-sjöström-1078983.jpg')} 
          nameImg={'producto3'}
        />
        <Ofertas 
          img={require('./img/pexels-oliver-sjöström-1433052.jpg')} 
          nameImg={'producto4'}
        />
        <Ofertas 
          img={require('./img/pexels-pixabay-237272.jpg')} 
          nameImg={'producto5'}
        />
        <Ofertas 
          img={require('./img/pexels-pixabay-38238.jpg')} 
          nameImg={'producto6'}
        />
      </div>
      <SobreN/>
      <MasInfo/>
      <Footer/>
    </div>
  );
}

export default App;