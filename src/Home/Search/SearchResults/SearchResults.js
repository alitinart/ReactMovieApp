import React from "react";
import { useParams } from "react-router";
import Movie from "../../Movies/Movies";
import "./SearchResults.css";

function SearchResult() {
  const { searchValue } = useParams();

  let resData = JSON.parse(sessionStorage.getItem("searchResults"));
  console.log(resData);
  return (
    <div className="container search-results">
      <h1 className="section-header">
        Search Results for: <strong>{searchValue}</strong>
      </h1>
      <div className="row">
        {resData.results.map((result) => {
          return (
            <div className="col-md-3" key={result.id}>
              <Movie
                title={result.title}
                summary={result.overview}
                id={result.id}
                image={"https://image.tmdb.org/t/p/w185/" + result.poster_path}
              ></Movie>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
