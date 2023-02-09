import React from "react";
import MapaAlojamientos from "./MapaAlojamientos";
import './LayoutStyles.css';

const Alojamientos = () => {



    return (

        <>
            <div className='col-12 alojamientos'>

                <div className='alojamientos-texto'>
                    <div className='title'>
                        <h2>Alojamientos</h2>
                        <p>
                            Estos últimos años Rascafría se ha convertido en un lugar muy popular para celebrar bodas. Cuando tomamos la decisión el pasado mes de noviembre ya estaban ocupados prácticamente todos los alojamientos del Valle de El Paular. 
                            
                            Por eso la opción que os recomendamos es que el punto de partida sea Madrid y utilicéis el autobús que contrataremos para llegar al sitio de la boda. 
                            
                            De todos modos, si conseguís algún alojamiento por el Valle o en el recorrido que va desde Madrid a Rascafría (por la A1) el autobús os puede recoger allí y dejaros de vuelta sin problema. 
                            
                            Aquí tenéis algunos enlaces. También podéis buscar entre las casas particulares que se anuncian en distintas plataformas. 

                        <br />
                        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-5'>

                        <div className='lista-alojamientos2'>
                            <ul>
                                <li><a href="http://www.hotelruralmarcos.es/localizacion.php" target="_blank" rel="noreferrer">1 - Hostal Rural Marcos</a></li>
                                <li><a href="https://www.booking.com/hotel/es/rural-los-manzanos.es.html" target="_blank" rel="noreferrer">2 - Hotel Rural Los Manzanos</a></li>
                                <li><a href="http://www.hotelruralelvalle.com/" target="_blank" rel="noreferrer">3 - Hotel Rural El Valle</a></li>
                                <li><a href="https://www.apartamentosrascafria.com/" target="_blank" rel="noreferrer">4 - Apartamentos Rascafría</a></li>
                                <li><a href="http://www.casagranero.com/" target="_blank" rel="noreferrer">5 - Hotel Casa Granero</a></li>
                                <li><a href="http://barondillo.com/establecimiento.html" target="_blank" rel="noreferrer">6 - Alojamientos Rurales Barondillo</a></li>
                                <li><a href="http://www.alojamientoslaabuela.com/" target="_blank" rel="noreferrer">7 - Alojamientos Rurales La Abuela</a></li>
                                <li><a href="https://www.apartamentosdelvira.com/" target="_blank" rel="noreferrer">8 - Apartamentos D'Elvira</a></li>
                                <li><a href="https://www.elrinconderascafria.com/" target="_blank" rel="noreferrer">9 - El Rincón de Rascafría</a></li>
                                <li><a href="http://www.caserontrastamara.es/" target="_blank" rel="noreferrer">10 - El caserón de Trastamara</a></li>
                                <li><a href="https://elchaletderascafria.com/" target="_blank" rel="noreferrer">11 - El chalet de Rascafría</a></li>
                                <li><a href="https://www.losespinares.es/" target="_blank" rel="noreferrer">12 - Hostal los Espinares</a></li>
                                <li><a href="https://posadaelcampanario.com/" target="_blank" rel="noreferrer">13 - Posada el Campanario</a></li>
                                <li><a href="https://www.posadadeisar.com/" target="_blank" rel="noreferrer">14 - Ecoposada de Isar</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className='col-7'>

                        <div className='mapa-alojamientos'>
                            <MapaAlojamientos />
                        </div>

                    </div>

                </div>

            </div>




        </>
    );
}


export default Alojamientos;