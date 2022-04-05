import { axiosInstance } from "./../../network/axiosConfig";
import { GET_MOVIES } from "./types";
import { getMovies } from "../../network/moviesAPI";
import { searchMovies } from "../../network/moviesAPI";

export const getMoviesList = (page,languageContext) => (dispatch) => {
  return getMovies(page,languageContext)
    .then((res) =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const getSearchMovies = (query,languageContext) => (dispatch) => {
  return searchMovies(query,languageContext)
    .then((res) =>
      dispatch({
        type: GET_MOVIES,
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};
