import React from "react";
import '../components/LayoutStyles.css';
import Mapa from '../components/Mapa';

function Ubicacion () {
  return (
    
    <>
        <div className='col-md-6 ubicacion'>
          <div className='title'>
            <h2>Ubicación</h2>
            <h6>
              Urbanización Los Grifos, nº4
              <br />
              Rascafría, Comunidad de Madrid
            </h6>
          </div>
          
          <div className='mapa-ubicacion'>
            <Mapa />
          </div>
        </div>


    </>
  );
}

export default Ubicacion;
