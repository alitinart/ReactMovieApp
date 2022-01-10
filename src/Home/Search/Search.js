import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import "./Search.css";

function Search() {
  const navigate = useNavigate();
  let searchValue = "";

  const search = (event) => {
    searchValue = event.target.value;
  };
  const searchHandler = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d80eb675515194444fd642c21502cbf4&language=en-US&query=${searchValue}&page=1&include_adult=false`
      )
      .then((res) => {
        let resData = res.data;
        sessionStorage.setItem("searchResults", JSON.stringify(resData));
        navigate(`searchResults/${searchValue}`);
      });
  };

  return (
    <div className="search">
      <div className="content">
        <input className="search-bar" onChange={search} placeholder="Search" />
        <button className="search-button" onClick={searchHandler}>
          {" "}
          <i className="bi bi-search" />{" "}
        </button>
      </div>
    </div>
  );
}

export default Search;
