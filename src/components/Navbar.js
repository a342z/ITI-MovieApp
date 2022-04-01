import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchMovie from "./SearchMovie";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-2">
      <Link className="navbar-brand" to="/">
        MoviesApp
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            to="/movies"
            style={(isActive) => ({
              backgroundColor: isActive ? "#D3D3D3" : "",
            })}
          >
            Movies
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/favourite"
            style={(isActive) => ({
              backgroundColor: isActive ? "#D3D3D3" : "",
            })}
          >
            Favourite
          </NavLink>
        </div>
      </div>

      <SearchMovie></SearchMovie>
    </nav>
  );
}
