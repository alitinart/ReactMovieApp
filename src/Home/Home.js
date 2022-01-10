import React, { useEffect } from "react";
import axios from "axios";
import Movie from "./Movies/Movies";

import "./Home.css";
import { Component } from "react/cjs/react.production.min";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      serverResponse: {
        results: [{ title: null, overview: null, id: null, poster_path: null }],
      },
    };
  }

  componentDidMount() {
    this.requestHandler().then((res) => {
      this.setState({ serverResponse: res.data });
    });
  }

  async requestHandler() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=d80eb675515194444fd642c21502cbf4"
    );
    return res;
  }

  render() {
    return (
      <div className="home">
        <h1 className="section-header">Trending Movies</h1>
        <div className="container trendingMovies">
          <div className="row">
            {this.state.serverResponse.results.map((movie) => {
              if (!movie.title) {
                return false;
              }
              return (
                <div className="col-md-2 movie" key={movie.id}>
                  <Movie
                    title={movie.title}
                    summary={movie.overview}
                    id={movie.id}
                    image={
                      "https://image.tmdb.org/t/p/w185/" + movie.poster_path
                    }
                  ></Movie>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
