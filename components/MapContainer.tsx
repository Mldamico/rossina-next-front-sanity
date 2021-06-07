import React from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

import "mapbox-gl/dist/mapbox-gl.css";
const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  interactive: false,
});

export const MapContainer = () => {
  return (
    <Map
      zoom={[15]}
      style="mapbox://styles/mapbox/streets-v9"
      center={[-58.564791788245444, -34.641277483561225]}
      className="map"
    >
      <Marker coordinates={[-58.56461773098429, -34.64147192357569]}>
        <FontAwesomeIcon icon={faMapMarker} color="#FF3744" size="3x" />
      </Marker>
    </Map>
  );
};
