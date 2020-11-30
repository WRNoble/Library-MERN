import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movie = (props) => (
  <div>
    <p>{props.movie.title}</p>
    <p>{props.movie.author}</p>
    <p>{props.movie.genre}</p>
    <p>{props.movie.published}</p>
    <p>{props.movie.description}</p>
    <p>{props.movie.digital}</p>
    <Link to={"/updatemovie/" + props.movie._id}>Edit Movie</Link> |{" "}
    <button
      className="btn btn-danger"
      onClick={() => {
        props.deleteMovie(props.movie._id);
      }}
    >
      Delete Movie
    </button>
  </div>
);

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = { movies: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5002/movies/")
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteMovie(id) {
    axios.delete("http://localhost:5002/movies/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      movies: this.state.movies.filter((el) => el._id !== id),
    });
  }

  movieList() {
    return this.state.movies.map((currentmovie) => {
      return (
        <Movie
          movie={currentmovie}
          deleteMovie={this.deleteMovie}
          key={currentmovie._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>director</th>
              <th>Genre</th>
              <th>Released</th>
              <th>Digital</th>
            </tr>
          </thead>
          <tbody>{this.movieList()}</tbody>
        </table>
      </div>
    );
  }
}
