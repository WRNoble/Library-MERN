import React, { Component } from "react";
import axios from "axios";

export default class CreateBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      genre: "",
      published: "",
      description: "",
      digital: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5002/books/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            books: response.data.map((book) => book.title),
            title: response.data[0].title,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  onChangePublished(e) {
    this.setState({
      published: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDigital(e) {
    this.setState({
      digital: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const book = {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
    };
  }

  render() {
    return (
      <div>
        <h2>Add New Book</h2>
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
            <label>Author: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
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
            <label>Published: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.published}
              onChange={this.onChangePublished}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
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
          <div className="form-group">
            <input type="submit" value="Add Book" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
