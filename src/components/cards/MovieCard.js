import React, { Component } from "react";
import axios from "axios";
//import "./Movies.scss";

export default class MovieCard extends Component {
  state = {
    movieData: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=b2ad629c&i=${this.props.movieID}&plot=full`
      )
      .then((response) => response.data)
      .then((response) => {
        this.setState({
          movieData: response,
        });
      },
      (error) => {
        this.setState({
          isLoading: true,
          error,
        });
      }
    );
  }

  render() {
    const {
      Title,
      Released,
      Plot,
      Poster,
      Genre,
      imdbRating,
    } = this.state.movieData;

    if (!Poster || Poster === "N/A") {
      return null;
    }

    return (
      <div className="movie-card-container">
        <div className="image-container">
            hello
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${Poster})` }}
          />
        </div>
        <div className="movie-info">
          <h2>Movie Details</h2>
          <div>
            <h1>{Title}</h1>
            <small>Released Date: {Released}</small>
          </div>
          <h4>Rating: {imdbRating} / 10</h4>
          <p>{Plot && Plot.substr(0, 350)}</p>
          <div className="tags-container">
            {Genre && Genre.split(", ").map((g) => <span key={g}>{g}</span>)}
          </div>
        </div>
      </div>
    );
  }
}