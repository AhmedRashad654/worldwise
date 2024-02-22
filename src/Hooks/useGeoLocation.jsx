import { useState } from "react";

export default function useGeoLocation() {
  const [myPosition, setMyPosition] = useState();
  const [loadPosition, setLoadPosition] = useState(false);
  function getLocation() {
    if (!navigator.geolocation) {
      alert("this Browser not support Location");
    } else {
      setLoadPosition(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setMyPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setLoadPosition(false);
        },
        (error) => {
          alert(error.message);
          setLoadPosition(false);
        }
      );
    }
  }
  return { myPosition, getLocation, loadPosition };
}
