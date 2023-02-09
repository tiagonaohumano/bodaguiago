import React from "react";
import '../components/LayoutStyles.css';


function Transporte() {
  return (
    <>
      <div className='col-md-6 transporte'>

<div className=''>
    <div className='title container-title'>
        <h2>Transporte</h2>
        <p>Para que no tengáis que coger el coche, os proponemos que cojáis un autobús que vamos 
        a contratar que saldrá a las 11:30 de algum punto céntrico de Madrid.
            Os confirmaremos el punto de salida en cuanto nos lo concrete la compañía de autobuses.</p>
    </div>
</div>

<div className='container horario-autobus'>
    <div className='row'>

        <div className='col-6'>
            <div className='autobus-ida'>

                <h4>Autobus Ida</h4>
                <p>Saliendo de Madrid</p>
                <hr />
                <h6 className='autobus-hora'>11:30</h6>
            </div>
        </div>

        <div className='col-6'>
            <div className='autobus-vuelta'>

                <h4>Autobus Vuelta</h4>
                <p>Saliendo de Rascafría</p>
                <hr />
                <div className='row'>
                    <div className='col-6'>
                        <h6 className='autobus-hora'>21:00</h6>
                    </div>
                    <div className='col-6'>
                        <h6 className='autobus-hora'>23:00</h6>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

</div>




    </>
  );
}

export default Transporte;
