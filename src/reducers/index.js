import { LOAD_CITIES, FETCH_DUMMY_DATA } from "../actions/loadCities";
import { data } from "../data/cities";

const initialState = { cities: [], dummy_data: [] };

export const reducer = (state = initialState, action) => {
  if (action.type === LOAD_CITIES) {
    return { ...state, cities: data };
  }
  if (action.type === FETCH_DUMMY_DATA) {
    return { ...state, dummy_data: action.payload };
  }
  return state;
};
