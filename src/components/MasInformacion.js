import React from 'react';
import './styles/MasInformacion.css';

function MasInformacion() {
    return(
        <div className="MasInformacion" id="MasInformacion">
            <div className="presentacion">
                <img src={require('../img/pexels-julius-silver-753626.jpg')} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo dolorum illum cumque vero, repellat reprehenderit magni sapiente sed, ipsa sunt tempore omnis ex nihil voluptatum quasi facilis perferendis! Sint iure unde nihil vero voluptates, facere hic est porro qui praesentium, rem in odio laborum dolore voluptatibus vitae dolor, culpa aut! Laboriosam beatae delectus nostrum corporis aut similique esse voluptatibus.</p>
                <br />
                <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptate!</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, provident voluptates quod officiis quo amet. Itaque, in amet nulla voluptas expedita quo fugit nam facilis facere aperiam debitis culpa excepturi.</p>
                <br />
                <strong>Lorem ipsum dolor sit.</strong>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius.</li>
                </ul>
            </div>
        </div>
    );
}

export default MasInformacion;