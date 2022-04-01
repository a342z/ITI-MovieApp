import React, { useState } from "react";
import { Link } from "react-router-dom";

import { addToFavourites } from "../store/actions/favourite";
import { deletefromFavourites } from "../store/actions/favourite";
import { useDispatch, useSelector } from "react-redux";

export default function MovieCard({ movie }) {
  const favs = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  // const [fav, setFav] = useState(movie.favourite);

  const isFav = (movieId) => {
    console.log("favs in function", favs);
    if (!favs) return;

    return favs.find((movie) => movie.id == movieId);
  };

  const addToFav = () => {
    console.log("movie added");
    dispatch(addToFavourites(movie));
  };

  const removeFromFav = (movieId) => {
    console.log("movieID", movieId);
    dispatch(deletefromFavourites(movieId));
  };
  return (
    <div className=" h-100">
      <div className="">
        <div className="movieImg">

          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            className="card-img-top"
            alt={movie.title}
          />

          <div className="overlay-left">
            {!isFav(movie.id) ? (
              <i
                onClick={addToFav}
                class="fa-regular fa-star large-icon"
                aria-hidden="true"
                style={{ color: "orange" }}
              ></i>
            ) : (
              <i
                onClick={() => {
                  removeFromFav(movie.id);
                }}
                class="fa-solid fa-star large-icon"
                aria-hidden="true"
                style={{ color: "orange" }}
              ></i>
            )}
          </div>

          <div className="overlay-right">
            <Link to={`/movies/${movie.id}`}>
              <i class="fa-solid fa-circle-info large-icon info-icon"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="card-body text-center">
        <h5 className="card-title">{movie.title} </h5>
      </div>
    </div>
  );
}
