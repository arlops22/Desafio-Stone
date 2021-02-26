import React, { useState, useCallback, useRef, useContext } from 'react';
import { useLoadScript, GoogleMap, Polygon, Marker } from '@react-google-maps/api';

import { Context } from '../../Context/PinContext';

import Header from '../../components/Header';
import PinScreen from '../../components/PinScreen';
import FilterBar from '../../components/FilterBar';

import markerLead from '../../assets/img/marker-leads.png';
import markerClient from '../../assets/img/marker-clients.png';

const libraries = ['places'];

export default function MapPage() {
    const [ selectedPin, setSelectedPin ] = useState()

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const { filteredPins } = useContext(Context);

    const mapRef = useRef();

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const selectPin = useCallback((pin) => {
        
        setSelectedPin(pin.id);

        mapRef.current.panTo({ lat: pin.latitude, lng: pin.longitude});
        mapRef.current.setZoom(15);
    
    }, [])

    const poloPath = [
        {lat: -22.90319219096707, lng: -43.11781893496313},
        {lat: -22.90623655663842, lng: -43.11395699373264},
        {lat: -22.90780345105838, lng: -43.11241149902344},
        {lat: -22.91161395635065, lng: -43.10980104391602},
        {lat: -22.91023320347384, lng: -43.09750015711301},
        {lat: -22.89958048719666, lng: -43.09171787501668},
        {lat: -22.89526029749486, lng: -43.10114922229547},
        {lat: -22.89788351955442, lng: -43.112247253883204},
        {lat: -22.90319219096707, lng: -43.11781893496313},
    ]

    const mapOptions = {
        disableDefaultUI: true,
    }

    const poloOptions = {
        strokeColor: '#6F847F',
        strokeOpacity: 0.8,
        strokeWeight: 4,
        fillColor: '#FFFFFF',
        fillOpacity: 0.1,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    }

    const mapContainerStyle = {
        width: '100vw',
        height: window.innerWidth > 1280 ? '100vh' : 'calc(100vh - 60px)',        
    };

    const mapCenter = {
        lat: -22.90300235918065,
        lng: -43.104014057441056
    }

    if (loadError) return <h1>Error with Google Maps API</h1>

    if (isLoaded) 
        return (
        <>
            <Header />
            <GoogleMap
                onLoad={onMapLoad}
                mapContainerStyle={mapContainerStyle}
                options={mapOptions}
                center={mapCenter}
                zoom={14}
                onClick={() => {
                        setSelectedPin(null);
                        mapRef.current.setZoom(14);
                    }}
            >
            <FilterBar />
            <Polygon
                path={poloPath}
                options={poloOptions}
            />
            {
                filteredPins.map((pin, index) => {
                    return (
                        <div key={index}>
                            <Marker
                                position={{lat: pin.latitude, lng: pin.longitude}}
                                icon={{
                                    url: pin.tipo === 'lead' ? markerLead : markerClient,
                                    scaledSize: new window.google.maps.Size(30, 30),
                                }}
                                onClick={() => selectPin(pin)}
                            ></Marker>
                            <PinScreen visible={selectedPin} pin={pin} />
                        </div>
                    )
                })
            }
            </GoogleMap>
        </>
        )
    else 
        return <p>Loading Map...</p>
    
}