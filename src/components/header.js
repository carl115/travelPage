import React from 'react';
import './styles/Header.css';

function Header() {
    return(
        <div className='Header'>
            <nav>
                <ion-icon name="airplane"></ion-icon>
                <div className="links">
                    <a href="#Inicio">Inicio</a>
                    <a href="#Ofertas">Ofertas</a>
                    <a href="#SobreNosotros">Sobre nosotros</a>
                    <a href="#MasInformacion">Mas informacion</a>
                </div>
            </nav>
            <div className="img-header">
            </div>
            <div className="content">
                <h2>Lorem ipsum dolor sit</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, obcaecati!</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,288L720,32L1440,288L1440,320L720,320L0,320Z"></path>
            </svg>
            <button className="btn-menu" id="btn-menu">
                <ion-icon name="menu"></ion-icon>
            </button>
            <div className="menu-desplegable">
                <button className="btn-cerrar" id="btn-cerrar">
                    <ion-icon name="close-circle"></ion-icon>
                </button>
                <ul>
                    <li>
                        <a href="#Inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="#Ofertas">Ofertas</a>
                    </li>
                    <li>
                        <a href="#SobreNosotros">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="#MasInformacion">Mas informacion</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;