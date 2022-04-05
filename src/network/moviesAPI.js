import { axiosInstance } from "./axiosConfig";

export const getMovieDetails = (id) => {
  return axiosInstance.get(`/movie/${id}`);
};

export const getMovies = (page,language) => {
  return axiosInstance.get(`/movie/popular?page=${page}&language=${language}`);
};

export const searchMovies = (query,language) => {
  return axiosInstance.get(`/search/movie/?query=${query}&language=${language}`);
};

