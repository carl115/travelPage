import React from 'react';
import './styles/Ofertas.css';

function Oferta(props) {
    return(
        <div className="product">
            <img src={props.img} alt={props.nameImg} />
            <div className="content">
                <strong>Description</strong>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, eaque!</p>
                <br />
                <p><strong>Night </strong>$00.00</p>
                <button><strong>Reserve</strong></button>
            </div>
        </div>
    );
}

export default Oferta;