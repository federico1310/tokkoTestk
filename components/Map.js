import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = props => {

  const position = {
    lat: props.latitude,
    lng: props.longitude
  }
  const containerStyles = {
    width: '400px', 
    height: '400px'
  }
  return (
      <LoadScript googleMapsApiKey="AIzaSyDNnl7-Ma9nGsySKzMyKJ8pkXRVBfqAqDs">
        <GoogleMap
          mapContainerStyle={props.containerStyles ? props.containerStyles : containerStyles}
          center={position}
          zoom={props.zoom ? props.zoom : 10}
        >
          <Marker
            position={position}
          />
        </GoogleMap>
      </LoadScript>
  )
}

export default Map;