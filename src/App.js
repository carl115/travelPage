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
  let valorSlider = 0;

  function slide(num) {
    const coment = [...document.querySelectorAll('.Comentario')];

    coment[valorSlider].classList.toggle("show-slider");
    
    if(valorSlider == 0 && num == (-1)) {
      valorSlider = coment.length;
    }

    valorSlider += num;

    if(valorSlider == coment.length) {
      valorSlider = 0;
    }

    coment[valorSlider].classList.toggle("show-slider");
  }

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
        <button id="atras" onClick={ () => slide(-1) }>
          <ion-icon name="arrow-round-back"></ion-icon>
        </button>
        <div className="slider">
          <Comentario 
          mostrar="Comentario show-slider"
          nombre="Edurne Alfonso" 
          estrella="0" 
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque sed vel at ea vitae, obcaecati impedit doloremque magnam sunt quasi et ut libero distinctio quibusdam totam corporis, labore nihil."
          />
          <Comentario 
          mostrar="Comentario"
          nombre="Piedad dos Santos" 
          estrella="1" 
          texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, commodi?"
          />
          <Comentario
          mostrar="Comentario"
          nombre="David Gago" 
          estrella="2"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perspiciatis totam nobis quidem fugiat nesciunt suscipit exercitationem sequi doloremque corrupti?" 
          />
          <Comentario
          mostrar="Comentario"
          nombre="Jose Manuel Martorell" 
          estrella="2.5" 
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Comentario
          mostrar="Comentario"
          nombre="Maria Elena Nicolas" 
          estrella="3" 
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reprehenderit fugit, velit quis harum porro eaque sequi itaque sapiente magnam facere possimus soluta enim culpa alias dolores unde molestias perferendis labore veniam quisquam consectetur tenetur? Inventore quidem nulla consectetur adipisci."
          />
          <Comentario
          mostrar="Comentario"
          nombre="Ayman Ojeda" 
          estrella="3.5" 
          texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, facere atque! Consectetur quo inventore eos deleniti. Exercitationem quae provident laborum non, modi est ullam, nesciunt veniam numquam, eum perferendis! Iusto?"
          />
          <Comentario
          mostrar="Comentario"
          nombre="Javier Gisbert" 
          estrella="4" 
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ex eos unde animi nulla voluptas dolores harum consequatur eaque corporis culpa illum temporibus mollitia iure eum eligendi voluptate doloremque quod laudantium perspiciatis neque hic. Alias, ducimus maxime architecto veritatis, voluptatem quae numquam nisi, ipsa culpa cumque aliquid explicabo corporis cum!"
          />
          <Comentario
          mostrar="Comentario"
          nombre="Baltasar Tejero" 
          estrella="4.5" 
          texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ratione deserunt rerum in voluptatibus quia consectetur quibusdam commodi tempora. Consequuntur veniam explicabo animi nam magni."
          />
          <Comentario
          mostrar="Comentario"
          nombre="Beatriz San Martin" 
          estrella="5" 
          texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio eaque numquam illum eum, commodi sint!"
          />
        </div>
        <button id="siguiente" onClick={ () => slide(1) }>
          <ion-icon name="arrow-round-forward"></ion-icon>
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;