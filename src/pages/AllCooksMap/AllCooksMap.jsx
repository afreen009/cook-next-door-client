import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Map, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./AllCooksMap.scss";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWZyZWVuMDA5IiwiYSI6ImNseWhnbGRjMDA0OTUybW9mN250bjd3Z2oifQ.95T9E_nhC0IYYRVUFDmqsQ";

export default function AllCooksMap() {
  const location = useLocation();
  const dataReceived = location.state;
  const locationsData = dataReceived.allLocation;
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <section className="maps-container">
      <Map
        initialViewState={{
          longitude: -81.2573763063707,
          latitude: 42.932808045065364,
          zoom: 16,
          width: "100vw",
          height: "100vh",
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker latitude={42.932808045065364} longitude={-81.2573763063707}>
          <div style={{ color: "red" }}>
            <svg
              height="20"
              viewBox="0 0 24 24"
              style={{
                fill: "red",
                stroke: "none",
              }}
            >
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
            </svg>
          </div>
        </Marker>
        {locationsData.map((location, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={location.long}
            latitude={location.lat}
            anchor="bottom"
          ></Marker>
        ))}
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
