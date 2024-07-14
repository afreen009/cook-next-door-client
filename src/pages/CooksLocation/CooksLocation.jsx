import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Map, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./CooksLocation.scss";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWZyZWVuMDA5IiwiYSI6ImNseWhnbGRjMDA0OTUybW9mN250bjd3Z2oifQ.95T9E_nhC0IYYRVUFDmqsQ";

export default function CooksLocation({ data }) {
  console.log(data);
  const location = useLocation();
  const dataReceived = location.state;
  const [selectedMarker, setSelectedMarker] = useState(null);
  return (
    <section className="maps-container">
      <Map
        initialViewState={{
          longitude: dataReceived.long,
          latitude: dataReceived.lat,
          zoom: 16,
          width: "100vw",
          height: "100vh",
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          key={`marker-${0}`}
          longitude={dataReceived?.long}
          latitude={dataReceived?.lat}
          anchor="bottom"
        ></Marker>

        {selectedMarker && (
          <Popup
            latitude={selectedMarker.latitude}
            longitude={selectedMarker.longitude}
            onClose={() => setSelectedMarker(null)}
          >
            <div>{selectedMarker.name}</div>
          </Popup>
        )}
      </Map>
    </section>
  );
}
