import React from "react";
import { getMovieDetails } from "../network/moviesAPI";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    getMovieDetails(params.id)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(movieDetails);
  return (
    <div className="card my-3 container col-8">
      <img
        className="card-img-top"
        // style={{ height: '400px', objectFit: 'contain' }}
        src={"https://image.tmdb.org/t/p/w500/" + movieDetails.backdrop_path}
        alt={movieDetails.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movieDetails.title}</h5>
        <p className="card-text">{movieDetails.overview}</p>
        <p className="card-text">
          <small>
            <strong>Rating: </strong>
            {movieDetails.vote_average}
          </small>
        </p>

        {/* {movieDetails !== null ? (
          <p className="card-text">
            <small className="text-muted">
              {movieDetails.genres.map((g) => {
                return <span>{g.name} </span>;
              })}
            </small>
          </p>
        ) : null} */}
      </div>
    </div>
  );
}
