import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";

function MovieDetails(props) {
  const { movieId } = useParams();

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=d80eb675515194444fd642c21502cbf4&language=en-US`
    )
    .then((res) => {
      sessionStorage.setItem("movie-details", JSON.stringify(res.data));
    });

  let movieData = JSON.parse(sessionStorage.getItem("movie-details"));

  return (
    <div className="container movie-details">
      <div className="row">
        <div className="col-md-3">
          <img
            className="movie-poster"
            src={"https://image.tmdb.org/t/p/w185/" + movieData.poster_path}
          />
        </div>
        <div className="col-md-9">
          <h1 className="movie-name">
            <a href={movieData.homepage}> {movieData.title} </a>
          </h1>
          <p className="movie-tagline"> {movieData.tagline} </p>
          <p className="movie-date">Release Date {movieData.release_date}</p>
          <br />
          <p className="movie-overview">{movieData.overview}</p>
          <br />
          <p className="collection">
            Belongs to Collection: <br />
            <img
              src={
                "https://image.tmdb.org/t/p/w185/" +
                movieData.belongs_to_collection.poster_path
              }
            />{" "}
          </p>
          <br />
          <p>
            Languages Spoken :{" "}
            {movieData.spoken_languages.map((language) => {
              return movieData.spoken_languages.length === 1
                ? language.english_name
                : language.english_name + ", ";
            })}
          </p>
          <p>
            Genres:{" "}
            {movieData.genres.map((genre) => {
              return movieData.genres.length === 1
                ? genre.name
                : genre.name + ", ";
            })}
          </p>
          <div className="vote">{movieData.vote_average}</div>
          <div className="vote-count">Vote Count: {movieData.vote_count}</div>
          <br />
          <br />
          <div className="production-countries">
            Production Countries:{" "}
            {movieData.production_countries.map((country) => {
              return movieData.production_countries.length === 1
                ? country.name
                : country.name + ", ";
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
