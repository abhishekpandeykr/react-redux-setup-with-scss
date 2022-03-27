import React from "react";
import { Marker, Popup } from "react-mapbox-gl";

export const CustomMarker = ({ data, popupOpen, setPopupOpen }) => {
  console.log("result ois ", popupOpen);
  return data.map((city) => (
    <>
      <Marker
        key={city.longitude}
        coordinates={[city.longitude, city.latitude]}
        anchor="bottom"
        onClick={() => setPopupOpen(city)}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/1200px-Google_Maps_pin.svg.png"
          alt={city.city}
          className="marker"
        />
      </Marker>
      {popupOpen[city.city] && (
        <Popup
          key={city.longitude}
          coordinates={[city.longitude, city.latitude]}
          onClose={() => isPopupOpen(false)}
          closeButton={true}
          anchor="top"
          offset={{
            "bottom-left": [12, -38],
            bottom: [0, 38],
            "bottom-right": [-12, -38],
          }}
        >
          <div>
            <p>usewrname : {popupOpen.user && popupOpen.user.name}</p>
            <p>Email: {popupOpen.user && popupOpen.user.email}</p>
          </div>
        </Popup>
      )}
    </>
  ));
};
