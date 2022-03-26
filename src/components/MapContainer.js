import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";

import Map from "./map";
import { data } from "../data/cities";
import { CustomMarker } from "./CustomMarker";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_CITIES } from "../actions/loadCities";

const MAP_STYLER_KEY = "Schd63xjX4TGBlkNBJKD";

const STYLE = `https://api.maptiler.com/maps/513b7e7a-9c1e-4d49-a301-8ea081569192/style.json?key=${MAP_STYLER_KEY}`;

const MapContainer = (props) => {
  const [popupOpen, setPopupOpen] = useState({});
  const dispatch = useDispatch();
  dispatch({ type: LOAD_CITIES });
  const values = useSelector((state) => state.cities);

  const updatePopup = (city) => {
    if (popupOpen[city.city]) {
      setPopupOpen({});
    } else {
      setPopupOpen({ ...city, [city.city]: true });
    }
  };

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
      containerStyle={{
        height: "600px",
        width: "100%",
      }}
      mapLib={maplibregl}
      mapStyle={STYLE}
      center={[data[0].longitude, data[0].latitude]}
      zoom={[3]}
    >
      <CustomMarker
        data={values}
        popupOpen={popupOpen}
        setPopupOpen={updatePopup}
      />
    </Map>
  );
};

export default MapContainer;
