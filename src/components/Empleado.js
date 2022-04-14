import React from 'react';
import './styles/Empleado.css';

function Empleado(props) {
    return(
        <div className="Empleado">
            <div className="header-img">
                <img src={props.img} />
                <strong>Lorem ipsum dolor sit</strong>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ad quidem saepe dignissimos debitis adipisci, dolor mollitia exercitationem expedita praesentium, obcaecati in enim amet magnam eaque voluptas. Dolor et fugiat dicta eum illum totam dolorem autem. Qui explicabo veritatis beatae.</p>
        </div>
    );
}

export default Empleado;