import React, { Component } from "react";
import axios from "axios";

export default class CreateBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      genre: "",
      published: 0000,
      description: "",
      digital: false,
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
