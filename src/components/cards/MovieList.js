import React, { Component } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import "../../App.css";

export default class MovieList extends Component {
  state = {
    moviesList: ["tt3896198"],
    searchTerm: "",
  };

  search = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://www.omdbapi.com/?apikey=b2ad629c&s=${this.state.searchTerm}&plot=full`
      )
      .then((response) => response.data)
      .then((response) => {
        if (!response.Search) {
          this.setState({
            moviesList: [],
          });
          return;
        }

        const moviesList = response.Search.map((movie) => movie.imdbID);
        this.setState({
          moviesList,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    const { moviesList } = this.state;

    return (
      <div>
        <form onSubmit={this.search}>
          <input
            placeholder="Search for a movie"
            onChange={this.handleChange}
          />
          <button type="submit">
            <i className="fa fa-search" />
            Search
          </button>
        </form>
        {moviesList.length > 0 ? (
          moviesList.map((movie) => <MovieCard movieID={movie} key={movie} />)
        ) : (
          <p>
            Couldn't find any movie. Please search again using another search
            criteria.
          </p>
        )}
      </div>
    );
  }
}
