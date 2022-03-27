import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";

import Map from "./map";
import { data } from "../data/cities";
import { CustomMarker } from "./CustomMarker";
import { useDispatch, useSelector, useStore } from "react-redux";
import { LOAD_CITIES, fetchDummyDataAction } from "../actions/loadCities";

const MAP_STYLER_KEY = "enter your key here";

const STYLE = `https://api.maptiler.com/maps/513b7e7a-9c1e-4d49-a301-8ea081569192/style.json?key=${MAP_STYLER_KEY}`;

const MapContainer = (props) => {
  const [popupOpen, setPopupOpen] = useState({});
  const dispatch = useDispatch();
  const store = useStore();
  dispatch({ type: LOAD_CITIES });
  const values = useSelector((state) => state.cities);
  const dummy_data = useSelector((state) => state.dummy_data);

  useEffect(() => {
    const userOne = dummy_data && dummy_data[Math.floor(Math.random() * 10)];
    setPopupOpen({ ...popupOpen, user: userOne });
  }, [dummy_data]);

  const updatePopup = (city) => {
    if (popupOpen[city.city]) {
      setPopupOpen({});
    } else {
      dispatch(fetchDummyDataAction(city));
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
