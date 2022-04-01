import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { axiosInstance } from "../network/axiosConfig";
import { getMovies } from "../network/moviesAPI";
import { searchMovie } from "../network/moviesAPI";
import Axios from "axios";
// const queryString = require("query-string");
import queryString from "query-string";

import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function Movies() {
  useSelector((state) => console.log("state from useSelector",state));
  const history = useHistory();
  const location = useLocation();

  // console.log("HISTORY", history);
  // console.log("LOCATION", location);
  const parsed = queryString.parse(location.search);
  // console.log("QQQQ", parsed["query"]);
  //   const queryString = parsed["query"];
  //   console.log("Qqq",queryString);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // if (!parsed["page"]) setPage(1)
  // console.log(page,"ppppppppppp insdie effect");
  useEffect(() => {
 
    //   getMovies()
    if (parsed["query"]) {
      console.log("there is query string");
      searchMovie(parsed["query"])
        .then((res) => {
          // console.log(res.data.results);
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("there is no query string");
      console.log("page parsing", parsed["page"]);
      if (!parsed["page"]) {
        setPage(1)
        console.log(page," >> page insdie effect");
        getMovies(1)
        .then((res) => {
          // console.log(res.data.results);
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
      }

      else{
    
      getMovies(page)
        .then((res) => {
          // console.log(res.data.results);
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
      }
    }
  }, [location.search]);

  //if u want to change page without query strings
  // useEffect(()=>{
  //   getMovies(page)
  //   .then((res) => {
  //     // console.log(res.data.results);
  //     setMovies(res.data.results);
  //   })

  //   console.log("Page from useEffect",page);

  // },[page])
  // console.log(movies);

  function nextPage() {
    setPage(page + 1);
    history.push(`movies?page=${page}`);
  }

  function previousPage() {
    if (page > 1) setPage(page - 1);
    else setPage(1);
    history.push(`movies?page=${page}`);
  }
  return (
    <>
      <div className="row row-cols-1 row-cols-md-6 g-2">
        {movies.map((movie) => {
          return (
            <div className="col mb-4" key={movie.id}>
              < MovieCard movie={movie} />
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
