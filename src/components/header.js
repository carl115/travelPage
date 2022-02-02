import React from 'react';
import './styles/Header.css';

function Header() {
    return(
        <div className='Header'>
            <div className="content">
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Ofertas</a>
                    <a href="#">Sobre nosotros</a>
                    <a href="#">Mas informacion</a>
                </nav>
                <h2>Lorem ipsum dolor sit</h2>
                <p>Lorem ipsum</p>
            </div>
        </div>
    );
}

export default Header;