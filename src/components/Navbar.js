import React, {useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import { LanguageContext } from "../context/language";

export default function Navbar() {
  const { languageContext, setLanguageContext } = useContext(LanguageContext);

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

          <button
            style={{ marginRight: "10px" }}
            className="btn btn-secondary"
            onClick={() => setLanguageContext(languageContext === "ar" ? "en" : "ar")}
          >
           {languageContext}
          </button>
        </div>
      </div>

      <SearchMovie></SearchMovie>
    </nav>
  );
}
