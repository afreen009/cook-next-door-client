import React, { useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./AllCooksMap.scss";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWZyZWVuMDA5IiwiYSI6ImNseWhnbGRjMDA0OTUybW9mN250bjd3Z2oifQ.95T9E_nhC0IYYRVUFDmqsQ";

const locations = [
  { lat: 37.7881856, long: -122.3995752, name: "Location 1", color: "red" },
  { lat: 37.8715926, long: -122.2727469, name: "Location 2", color: "red" },
  { lat: 37.7749, long: -122.4194, name: "Location 3", color: "red" },
  { lat: 37.8024, long: -122.4056, name: "Location 4", color: "red" },
  { lat: 37.7858, long: -122.4364, name: "Location 5", color: "red" },
];

export default function AllCooksMap() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  // Function to generate a custom SVG marker
  const CustomMarker = ({ color }) => (
    <svg
      height="20"
      viewBox="0 0 24 24"
      style={{ fill: color, stroke: "none", cursor: "pointer" }}
    >
      <path d="M20 10c0-5.52-4.48-10-10-10S0 4.48 0 10c0 7.82 10 14 10 14s10-6.18 10-14zm-10 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    </svg>
  );
  return (
    <section className="maps-container">
      <Map
        initialViewState={{
          longitude: -122.3995752,
          latitude: 37.7881856,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {locations.map((location, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={location.long}
            latitude={location.lat}
            anchor="bottom"
          >
            {/* <div onClick={() => setSelectedMarker(locations)}>
              <CustomMarker color={locations.color} />
            </div> */}
          </Marker>
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
// import React, { useState } from "react";
// import MapGL, { Marker, Popup } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// const AllCooksMap = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7749,
//     longitude: -122.4194,
//     zoom: 10,
//     width: "100vw",
//     height: "100vh",
//   });

//   const [selectedMarker, setSelectedMarker] = useState(null);

//   const markers = [
//     { id: 1, latitude: 37.7749, longitude: -122.4194, name: "Marker 1" },
//     { id: 2, latitude: 37.7849, longitude: -122.4094, name: "Marker 2" },
//     { id: 3, latitude: 37.7949, longitude: -122.4294, name: "Marker 3" },
//   ];

//   return (
//     <MapGL
//       {...viewport}
//       mapboxApiAccessToken="pk.eyJ1IjoiYWZyZWVuMDA5IiwiYSI6ImNseWhnbGRjMDA0OTUybW9mN250bjd3Z2oifQ.95T9E_nhC0IYYRVUFDmqsQ"
//       onViewportChange={(nextViewport) => setViewport(nextViewport)}
//     >
//       {markers.map((marker) => (
//         <Marker
//           key={marker.id}
//           latitude={marker.latitude}
//           longitude={marker.longitude}
//         >
//           <div onClick={() => setSelectedMarker(marker)}>
//             <svg
//               height="20"
//               viewBox="0 0 24 24"
//               style={{ fill: "#d00", stroke: "none", cursor: "pointer" }}
//             >
//               <path d="M20 10c0-5.52-4.48-10-10-10S0 4.48 0 10c0 7.82 10 14 10 14s10-6.18 10-14zm-10 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
//             </svg>
//           </div>
//         </Marker>
//       ))}

//       {selectedMarker && (
//         <Popup
//           latitude={selectedMarker.latitude}
//           longitude={selectedMarker.longitude}
//           onClose={() => setSelectedMarker(null)}
//         >
//           <div>{selectedMarker.name}</div>
//         </Popup>
//       )}
//     </MapGL>
//   );
// };

// export default AllCooksMap;
