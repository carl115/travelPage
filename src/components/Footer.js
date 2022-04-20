import React from 'react';
import './styles/Footer.css';

function Footer() {
    return(
        <footer className="Footer" id="Footer">
            <div className="content-1">
                <a href="#Inicio">Inicio</a>
                <a href="#Ofertas">Ofertas</a>
                <a href="#SobreNosotros">Sobre nosotros</a>
                <a href="#MasInformacion">Mas informacion</a>
            </div>
            <div className="content-2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, aperiam?</p>
                <div className="icons-socials">
                    <a><ion-icon name="logo-whatsapp"></ion-icon></a>
                    <a><ion-icon name="logo-facebook"></ion-icon></a>
                    <a><ion-icon name="logo-twitter"></ion-icon></a>
                    <a><ion-icon name="logo-instagram"></ion-icon></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;