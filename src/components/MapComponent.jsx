import React from 'react';

+
    -
    -
    -
    -
    -
    -
    -
    -
    -
    -
    -
    - import L from 'leaflet';














const MapComponent = () => {

    +
        -
        -
        -
        -
        -
        -
        -
        -
        -
        -
        -
        - const position = L.latLng(13.0543, 77.4754);













    return (
        <MapContainer style={{ height: "400px", width: "100%" }} center={coordinates} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates} 
+
            -
            -
            -
            -
            -
            - icon={L.icon({ iconUrl: '/path/to/pin-icon.png' })}
            <Popup>
                A pretty CSS3 popup. Easily customizable.
            </Popup>
        </Marker>
        </MapContainer >
    );
};

export default MapComponent;