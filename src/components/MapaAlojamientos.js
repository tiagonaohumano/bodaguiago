import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import "../components/Mapa.css";

        const containerStyle = {
            width: '100%',
            height: '100%',
        };

        const center = {
            lat: 40.904511, 
            lng: -3.878291
        };

    const markers = [
        {
            id: 1,
            titulo: "1",
            name: "Hostal Rural Marcos",
            address: "Avenida del Paular, 34",
            position: {lat: 40.900679, lng: -3.879556},
            website: "http://www.hotelruralmarcos.es/localizacion.php"
        },
        {
            id: 2,
            titulo: "2",
            name: "Hotel Rural Los Manzanos",
            address: "Avenida del Valle, 50",
            position: {lat: 40.906403, lng: -3.877490},
            website: "https://www.booking.com/hotel/es/rural-los-manzanos.es.html"
        },
        {
            id: 3,
            titulo: "3",
            name: "Hotel Rural El Valle",
            address: "Avenida del Valle, 39",
            position: {lat: 40.907162, lng: -3.876809},
            website: "http://www.hotelruralelvalle.com/"
        },
        {
            id: 4,
            titulo: "4",
            name: "Apartamientos Rascafría",
            address: "Calle Reyes / Plaza de la Villa",
            position: {lat: 40.905160, lng: -3.880382},
            website: "https://www.apartamentosrascafria.com/"
        },
        {
            id: 5,
            titulo: "5",
            name: "Hotel Casa Granero",
            address: "Calle Artiñuelo, 4",
            position: {lat: 40.904517, lng: -3.881024},
            website: "http://www.casagranero.com/"
        },
        {
            id: 6,
            titulo: "6",
            name: "Apartamientos Rurales Barondillo",
            address: "Cuesta del Choro, 4",
            position:{lat: 40.902375, lng: -3.878471},
            website: "http://barondillo.com/establecimiento.html"
        },
        {
            id: 7,
            titulo: "7",
            name: "Alojamientos Rurales La Abuela",
            address: "Calle Rivera del Artiñuelo, 4",
            position:{lat: 40.902024, lng: -3.877691},
            website: "http://www.alojamientoslaabuela.com/"
        },
        {
            id: 8,
            name: "Apartamentos D'Elvira",
            titulo: "8",
            address: "Calle Mandilles / Plaza de la Villa",
            position:{lat: 40.905374, lng: -3.880291},
            website: "https://www.apartamentosdelvira.com/"
        },
        {
            id: 9,
            titulo: "9",
            name: "El Rincón de Rascafría",
            address: "Plaza Dos de Mayo, 4",
            position:{lat: 40.904084, lng: -3.877893},
            website: "https://www.elrinconderascafria.com/" 
        },
        {
            id: 10,
            name: "El Caserón de Trastamara",
            titulo: "10",
            address: "Plaza de Trastamara, 11",
            position:{lat: 40.906181, lng: -3.880364},
            website: "http://www.caserontrastamara.es/"
        },
        {
            id: 11,
            name: "El Chalet de Rascafría",
            titulo: "11",
            address: "Calle de los Mandiles, 14",
            position:{lat: 40.904576, lng: -3.878291},
            website: "https://elchaletderascafria.com/" 
        },
        {
            id: 12,
            name: "Hostal Los Espinares",
            titulo: "12",
            address: "Avenida de los Cascajales, 52-54",
            position:{lat: 40.899768, lng: -3.873673},
            website: "https://www.losespinares.es/"
        },
        {
            id: 13,
            name: "Posada El Campanario",
            titulo: "13",
            address: "Calle Amargura, 11",
            position:{lat: 40.905102, lng: -3.881367},
            website: "https://posadaelcampanario.com/"
        },
        {
            id: 14,
            name: "Ecoposada de Isar",
            address: "",
            titulo: "14",
            position:{lat: 40.915141, lng: -3.853170},
            website: "https://www.posadadeisar.com/"
        },
        
    ]


function MapaAlojamientos() {
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAtqFqx0_l7CpK7GbIICGSsvdqnmKRaK4Q"
    })

    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

      
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}  
            onClick={() => setActiveMarker(null)}
        >
            {markers.map(({ id, name, position, titulo, address, website }) => (
                <Marker 
                    position={position}
                    key={id}
                    label={titulo}
                    onClick={() => handleActiveMarker(id)}
                >
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div><b>{name}</b><br/>{address}<br/><a href={website} target="_blank">ver website</a></div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))}
            
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MapaAlojamientos)