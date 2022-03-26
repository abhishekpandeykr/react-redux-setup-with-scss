import { LOAD_CITIES } from "../actions/loadCities";
import { data } from "../data/cities";

const initialState = { cities: [] };

export const reducer = (state = initialState, action) => {
  if (action.type === LOAD_CITIES) {
    return { ...state, cities: data };
  }
  return state;
};
