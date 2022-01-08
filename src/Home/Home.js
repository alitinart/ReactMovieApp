import React from "react";
import axios from "axios";
import Movie from "./Movies/Movies";

import "./Home.css";

function Home() {
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
    <div>
      <h1 className="section-header">Trending Movies</h1>
      <div className="trendingMovies">
        {movies.results.map((movie) => {
          if (!movie.title) {
            return;
          }
          return (
            <div className="item">
              <Movie
                title={movie.title}
                key={movie.title}
                summary={movie.overview}
                image={"https://image.tmdb.org/t/p/w185/" + movie.poster_path}
              ></Movie>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
