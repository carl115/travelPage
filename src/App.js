import React from 'react';
import './App.css';

import Header from './components/header';
import Inicio from './components/Inicio';
import Ofertas from './components/Ofertas';
import Empleado from './components/Empleado';
import MasInfo from './components/MasInformacion';
import Comentario from './components/Comentario';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Inicio/>
      <div className="Ofertas" id="Ofertas">
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
      <div className="SobreNosotros" id="SobreNosotros">
        <Empleado img={require('./img/personOne.jpg')} />
        <Empleado img={require('./img/personTwo.jpg')} />
      </div>
      <div className="img-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="waveTop"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,192C672,213,768,235,864,234.7C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="waveBottom"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,192C672,213,768,235,864,234.7C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <MasInfo/>
      <div className="Comentarios">
        <button>
          <ion-icon name="arrow-round-back"></ion-icon>
        </button>
        <div className="slider">
          <Comentario className="comentario" estrella={"4.5"} />
          <Comentario className="comentario" estrella={"2.5"} />
        </div>
        <button>
          <ion-icon name="arrow-round-forward"></ion-icon>
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;