import React, { Component } from "react";
import "./Movies.css";

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  movieStyling = {
    backgroundImage: "url(" + this.props.image + ")",
  };

  render() {
    return (
      <div className="movie">
        <div className="layer">
          <img className="movie-poster" src={this.props.image} />
          <h1 className="movie-title"> {this.props.title} </h1>
          <p> {this.props.summary} </p>
          <button className="btn">More Info </button>
        </div>
      </div>
    );
  }
}

export default Movie;
