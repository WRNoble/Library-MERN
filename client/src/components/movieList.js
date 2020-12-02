import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movie = (props) => (
  <tr>
    <td>{props.movie.title}</td>
    <td>{props.movie.director}</td>
    <td>{props.movie.genre}</td>
    <td>{props.movie.released}</td>
    <td>{props.movie.digital}</td>
    <td>
      <Link to={"/updatemovie/" + props.movie._id}>Edit</Link>
      <br />
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteMovie(props.movie._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = { movies: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5002/movies/movies")
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.movieList()}</tbody>
        </table>
      </div>
    );
  }
}
