import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "../components/Mapa.css";

        const containerStyle = {
            width: '100%',
            height: '100%'
        };

        const center = {
            lat: 40.905950,
            lng: -3.861829
        };


function Mapa() {
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAtqFqx0_l7CpK7GbIICGSsvdqnmKRaK4Q"
    })

   
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}        >
            <Marker position={center} options={{
                label: {
                    text: "Casa Monfort/Juárez",
                    className: "map-marker"
                }
            }} />
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Mapa)