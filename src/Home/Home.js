import React from "react";
import axios from "axios";
import Movie from "./Movies/Movies";

import "./Home.css";

function Home() {
  sessionStorage.removeItem("movie-details");

  axios
    .get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=d80eb675515194444fd642c21502cbf4"
    )
    .then((res) => {
      let movies = res.data;
      sessionStorage.setItem("trendingMovies", JSON.stringify(movies));
    });

  let movies = JSON.parse(sessionStorage.getItem("trendingMovies"));
  return (
    <div className="home">
      <h1 className="section-header">Trending Movies</h1>
      <div className="container trendingMovies">
        <div className="row">
          {movies.results.map((movie) => {
            if (!movie.title) {
              return false;
            }
            return (
              <div className="col-md-2 movie" key={movie.id}>
                <Movie
                  title={movie.title}
                  summary={movie.overview}
                  id={movie.id}
                  image={"https://image.tmdb.org/t/p/w185/" + movie.poster_path}
                ></Movie>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
