import React, { useEffect, useState, useContext } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { axiosInstance } from "../network/axiosConfig";
import { getMovies } from "../network/moviesAPI";
import { searchMovie } from "../network/moviesAPI";
import { LanguageContext } from "../context/language";
import Axios from "axios";
// const queryString = require("query-string");
import queryString from "query-string";
import { addToQuery } from "../store/actions/query";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList, getSearchMovies } from "../store/actions/movies";
export default function Movies() {
  const { languageContext, setLanguageContext } = useContext(LanguageContext);
  // useSelector((state) => console.log("state from useSelector", state));
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  // console.log("HISTORY", history);
  // console.log("LOCATION", location);
  const parsed = queryString.parse(location.search);
  // console.log("QQQQ", parsed["query"]);
  //   const queryString = parsed["query"];
  //   console.log("Qqq",queryString);

  // const [movies, setMovies] = useState([]);

  const movies = useSelector((state) => state.movies);
  const query = useSelector((state) => state.query);

  const [page, setPage] = useState(1);

  useEffect(() => {
    // console.log("useEffect");

    if (!parsed["query"]) dispatch(addToQuery(""));

    console.log("query=",query);
    if (query === "") 
    {
      console.log("get movies");
      console.log("query=",query);
      dispatch(getMoviesList(page, languageContext));
      console.log(movies);
    }
    else dispatch(getSearchMovies(query, languageContext));

  }, [query, page, languageContext,location]);




  function nextPage() {
    setPage((page) => page + 1);
    // setPage(page + 1);
    // history.push(`movies?page=${page}`);
  }

  function previousPage() {
    if (page > 1) setPage((page) => page - 1);
    else setPage(1);
    // history.push(`movies?page=${page}`);
  }
  return (
    <>
      <div className="row  row-cols-1  row-cols-lg-6 row-cols-md-4 g-2">
        {movies.map((movie) => {
          return (
            <div className="col mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between mb-3">
        <button onClick={previousPage} type="button" className="btn btn-light">
          previous
        </button>
        <button onClick={nextPage} type="button" className="btn btn-light">
          next
        </button>
      </div>
    </>
  );
}
