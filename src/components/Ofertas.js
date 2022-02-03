import React from 'react';
import './styles/Ofertas.css';

function Oferta(props) {
    return(
        <div className="product">
            <img src={props.img} alt={props.nameImg} />
            <div className="content-text">
                <p>Lorem ipsum dolor sit amet</p>
                <p><strong>Noche </strong>$00.00</p>
            </div>
        </div>
    );
}

export default Oferta;