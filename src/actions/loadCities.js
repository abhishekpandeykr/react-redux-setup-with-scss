import { fetchDummyResult } from "../data/cities";

export const LOAD_CITIES = "LOAD_CITIES";
export const FETCH_DUMMY_DATA = "FETCH_DUMMY_DATA";

export const loadCitiesAction = {
  type: LOAD_CITIES,
};

export const fetchDummyDataAction = (value) => {
  return (dispatch) => {
    fetchDummyResult(value).then((result) => {
      dispatch({
        type: FETCH_DUMMY_DATA,
        payload: result,
      });
    });
  };
};
