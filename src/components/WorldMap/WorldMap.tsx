import React, { useState, useEffect, useContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { type LeafletMouseEvent } from 'leaflet';
import { CoordinatesElevationContext } from '~/context/context';

const WorldMap: React.FC = () => {

    const { coordinates, setCoordinates } = useContext(CoordinatesElevationContext);


    const LocationMarker: React.FC = () => {
        useMapEvents({
            click(e: LeafletMouseEvent) {
                const { lat, lng } = e.latlng;
                setCoordinates({ lat, lng });
            },
        });

        return coordinates === null ? null : (
            <Marker position={coordinates}>
                <Popup>Latitude: {coordinates.lat.toPrecision(5)}° & Longitude: {coordinates.lng.toPrecision(5)}°</Popup>
            </Marker>
        );
    };


    return (
        <MapContainer
            center={{ lat: 0, lng: 0 }}
            zoom={2}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    );
};

export default function Render() {
    const [renderClient, setRenderClient] = useState(false);

    useEffect(() => {
        setRenderClient(true);
    }, []);

    return renderClient ? <WorldMap /> : <span>loading...</span>;
}
