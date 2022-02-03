import React from 'react';

function Oferta(props) {
    return(
        <div className="product">
            <img src={props.img} alt={props.nameImg} />
            <p>Lorem ipsum dolor sit amet</p>
            <p><strong>Noche </strong>$00.00</p>
        </div>
    );
}

export default Oferta;