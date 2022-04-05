import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToQuery
 } from "../store/actions/query";
export default function SearchMovie() {
  //   const searchLink = () => `movies?query=${query}`;
  const [query, setQuery] = useState("");
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

  // const querystate = useSelector(state => state.query);

  function search(event) {
    // console.log("quary stroe",querystate);
    dispatch(addToQuery(query));
    event.preventDefault();
    // history.push(`movies?query=${query}`);
    // history.go();
  }

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  return (
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
      <button onClick={search} className="btn btn-outline-success my-2 my-sm-0">
        Search
      </button>
    </form>
  );
}
