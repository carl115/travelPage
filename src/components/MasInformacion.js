import React from 'react';

function MasInformacion() {
    return(
        <div className="MasInformacion">
            <div className="content">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex maiores eos excepturi dolor suscipit placeat alias enim dolore magnam, accusantium ducimus iure natus a reiciendis adipisci ad quibusdam doloribus saepe?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sunt nam excepturi. Officiis, voluptatem quo temporibus repellendus libero recusandae rem molestias blanditiis atque facere excepturi deserunt reiciendis accusamus, iste provident?</p>
            </div>
            <div className="content">
                <img src={require('../img/pexels-asad-photo-maldives-457878.jpg')} alt="imagen1" />
                <img src={require('../img/pexels-julius-silver-753626.jpg')} alt="imagen2" />
                <img src={require('../img/pexels-oliver-sjöström-1078983.jpg')} alt="imagen3" />
                <img src={require('../img/pexels-pixabay-237272.jpg')} alt="imagen4" />
            </div>
        </div>
    );
}

export default MasInformacion;