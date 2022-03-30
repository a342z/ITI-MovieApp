import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const searchLink = () => `movies?query=${query}`;

  const history = useHistory();
  const location = useLocation();
  console.log("HISTORY", history);
  console.log("LOCATION", location);

  const [query, setQuery] = useState("");
  function search(event) {
    // event.preventDefault();
    console.log("HISTORY", history);
    console.log("LOCATION", location);

    // history.location="www.google.com";
    history.push(`movies?query=${query}`);
    // history.goForward();
  }

  function handleInputChange(event) {
    console.log(event);
    setQuery(event.target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-2">
      <Link className="navbar-brand" to="/">
        Movies
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/movies">
            Movies
          </Link>
          <Link className="nav-item nav-link" to="/favourite">
            Favourite
          </Link>
        </div>
      </div>

      <form className="form-inline d-flex">
        <input
          className="form-control mr-sm-2 mx-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="query"
          value={query}
          onChange={handleInputChange}
        />
        {/* <button
          onClick={search}
          className="btn btn-outline-success my-2 my-sm-0"
        >
          Search
        </button> */}
        <Link className="nav-item nav-link" to={searchLink()}>
          Search
        </Link>
      </form>
    </nav>
  );
}
