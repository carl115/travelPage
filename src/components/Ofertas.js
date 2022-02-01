import React from 'react';

function Oferta() {
    return(
        <div className="Oferta">
            <div className="product">
                <img src={require('../img/pexels-julius-silver-753626.jpg')} alt="producto1" />
            </div>
            <div className="product">
                <img src={require('../img/pexels-max-ravier-3331064.jpg')} alt="producto2" />
            </div>
            <div className="product">
                <img src={require('../img/pexels-oliver-sjöström-1078983.jpg')} alt="producto3" />
            </div>
            <div className="product">
                <img src={require('../img/pexels-oliver-sjöström-1433052.jpg')} alt="producto4" />
            </div>
            <div className="product">
                <img src={require('../img/pexels-pixabay-237272.jpg')} alt="producto5" />
            </div>
            <div className="product">
                <img src={require('../img/pexels-pixabay-38238.jpg')} alt="producto6" />
            </div>
        </div>
    );
}

export default Oferta;