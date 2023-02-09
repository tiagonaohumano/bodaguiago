import Confirmacion from './Confirmacion';
import './LayoutStyles.css';
import Rascafria from './Rascafria';

import Ubicacion from './Ubicacion';
import Transporte from './Transporte';
import Alojamientos from './Alojamientos';
import Regalos from './Regalos';
import Etiqueta from './Etiqueta';

function Layout() {
    return (

        <>

            <section className='layout'>
                <div className='header'></div>

                <div className='main'>
                    <div className='container-fluid'>
                        <div className='row'>

                            <div className='col-sm-12 home'>
                                
                                
                                    <div className="texto-home">
                                        <h1>Nos casamos</h1>
                                        <h3>
                                            24 de Junio de 2023
                                            <br />
                                            13h
                                        
                                        </h3>
                                    </div>
                                    <div className="background-home" />                     



                            </div>

                            

                            <Ubicacion/>

                            <Transporte />

                            <Alojamientos />

                            <Rascafria />

                            <Regalos />
                            
                            <Etiqueta />
                            
                            <Confirmacion />                      



                        </div>
                    </div>

                </div>

            </section>



        </>

    );
}

export default Layout;