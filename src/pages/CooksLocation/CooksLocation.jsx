import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Map, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./CooksLocation.scss";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWZyZWVuMDA5IiwiYSI6ImNseWhnbGRjMDA0OTUybW9mN250bjd3Z2oifQ.95T9E_nhC0IYYRVUFDmqsQ";

export default function CooksLocation({ lat, long }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const latitude = lat || 42.932808045065364;
  const longitude = long || -81.2573763063707;
  return (
    <section className="maps-container">
      <Map
        initialViewState={{
          longitude: -81.2573763063707,
          latitude: 42.932808045065364,
          zoom: 15,
          width: "100vw",
          height: "100vh",
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          key={`marker-${0}`}
          longitude={long || longitude}
          latitude={lat || latitude}
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
