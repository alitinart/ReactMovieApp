import React from "react";
import axios from "axios";
import "./MovieDetails.css";
import { Component } from "react/cjs/react.production.min";

class MovieDetails extends Component {
  queryParams = new URLSearchParams(window.location.pathname);

  constructor(props) {
    super(props);

    this.state = {
      movieData: {
        homepage: "DUMMY",
        title: "DUMMY",
        poster_path: "aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
        overview: "DUMMY",
        tagline: "DUMMY",
        release_date: "DUMMY",
        spoken_languages: ["English"],
        genres: ["Comedy"],
        production_countries: ["1"],
        belongs_to_collection: {
          poster_path: "aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
        },
      },
    };
  }

  componentDidMount() {
    this.requestHandler().then((res) => {
      this.setState({ movieData: res.data });
    });
  }

  async requestHandler() {
    const movieId = window.location.pathname.substring(7);
    const res = axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=d80eb675515194444fd642c21502cbf4&language=en-US`
    );
    return res;
  }

  render() {
    return (
      <div className="container movie-details">
        <div className="row">
          <div className="col-md-3">
            <img
              className="movie-poster"
              src={
                "https://image.tmdb.org/t/p/w185/" +
                this.state.movieData.poster_path
              }
            />
          </div>
          <div className="col-md-9">
            <h1 className="movie-name">
              <a href={this.state.movieData.homepage}>
                {" "}
                {this.state.movieData.title}{" "}
              </a>
            </h1>
            <p className="movie-tagline"> {this.state.movieData.tagline} </p>
            <p className="movie-date">
              Release Date {this.state.movieData.release_date}
            </p>
            <br />
            <p className="movie-overview">{this.state.movieData.overview}</p>
            <br />
            <p className="collection">
              Belongs to Collection: <br />
              <img
                src={
                  "https://image.tmdb.org/t/p/w185/" +
                  this.state.movieData.belongs_to_collection.poster_path
                }
              />{" "}
            </p>
            <br />
            <p>
              Languages Spoken :{" "}
              {this.state.movieData.spoken_languages.map((language) => {
                return this.state.movieData.spoken_languages.length === 1
                  ? language.english_name
                  : language.english_name + ", ";
              })}
            </p>
            <p>
              Genres:{" "}
              {this.state.movieData.genres.map((genre) => {
                return this.state.movieData.genres.length === 1
                  ? genre.name
                  : genre.name + ", ";
              })}
            </p>
            <div className="vote">{this.state.movieData.vote_average}</div>
            <div className="vote-count">
              Vote Count: {this.state.movieData.vote_count}
            </div>
            <br />
            <br />
            <div className="production-countries">
              Production Countries:{" "}
              {this.state.movieData.production_countries.map((country) => {
                return this.state.movieData.production_countries.length === 1
                  ? country.name
                  : country.name + ", ";
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
