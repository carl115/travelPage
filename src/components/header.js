import React from 'react';
import './styles/Header.css';

function Header() {
    return(
        <div className='Header'>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Ofertas</a>
                <a href="#">Sobre nosotros</a>
                <a href="#">Mas informacion</a>
            </nav>
            <div className="content">
                <h2>Lorem ipsum dolor sit</h2>
                <p>Lorem ipsum</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,288L720,32L1440,288L1440,320L720,320L0,320Z"></path>
            </svg>
        </div>
    );
}

export default Header;