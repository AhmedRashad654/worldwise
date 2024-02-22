import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import useGeoLocation from "../Hooks/useGeoLocation";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import useUrl from "../Hooks/useUrl";
import { useCities } from "../Context/CititesContext";
export default function Map() {
  const { myPosition, getLocation, loadPosition } = useGeoLocation();
  const [position, setPosition] = useState([40.416775, -3.70379]);
  const { cities } = useCities();
  const { lat, lng } = useUrl();
  useEffect(() => {
    if (lat && lng) {
      setPosition([lat, lng]);
    }
  }, [lat, lng]);
  useEffect(() => {
    if (myPosition) {
      setPosition([myPosition.lat, myPosition.lng]);
    }
  }, [myPosition]);
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities &&
          cities.map((city, index) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={index}
            >
              <Popup>{city.country}</Popup>
            </Marker>
          ))}

        <DetermentPlace />
        <ChangePosition position={position} />
      </MapContainer>
      <button className={styles.my} onClick={getLocation}>
        {loadPosition ? "Loading..." : "GET POSITION USER"}
      </button>
    </div>
  );
}
function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function DetermentPlace() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`Form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
