import React, { Component } from "react";
import axios from "axios";

export default class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDirector = this.onChangeDirector.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeReleased = this.onChangeReleased.bind(this);
    this.onChangeDigital = this.onChangeDigital.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      director: "",
      genre: "",
      released: "",
      digital: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5002/movies/movies" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          title: response.data.title,
          director: response.data.director,
          genre: response.data.genre,
          released: response.data.released,
          digital: response.data.digital,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDirector(e) {
    this.setState({
      director: e.target.value,
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  onChangeReleased(e) {
    this.setState({
      released: e.target.value,
    });
  }

  onChangeDigital(e) {
    this.setState({
      digital: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const movie = {
      title: this.state.title,
      director: this.state.director,
      genre: this.state.genre,
      released: this.state.released,
      digital: this.state.digital,
    };
    console.log(movie);

    axios
      .post(
        "http://localhost:5002/movies/updatemovie/" +
          this.props.match.params.id,
        movie
      )
      .then((response) => console.log(response.data));

    window.location = "/movie";
  }

  render() {
    return (
      <div className="container">
        <h2>Edit Movie</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Director: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.director}
              onChange={this.onChangeDirector}
            />
          </div>
          <div className="form-group">
            <label>Genre: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>
          <div className="form-group">
            <label>Released: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.released}
              onChange={this.onChangeReleased}
            />
          </div>
          <div className="form-group">
            <label>Digital: </label>
            <input
              type="boolean"
              required
              className="form-control"
              value={this.state.digital}
              onChange={this.onChangeDigital}
            />
          </div>
          <div>
            <input type="submit" value="Edit Movie" className="border" />
          </div>
        </form>
      </div>
    );
  }
}
