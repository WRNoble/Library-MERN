import React, { Component } from "react";
import axios from "axios";

export default class EditBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangePublished = this.onChangePublished.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDigital = this.onChangeDigital.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      author: "",
      genre: "",
      published: 0000,
      description: "",
      digital: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5002/books/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          title: response.data.title,
          author: response.data.author,
          genre: response.data.genre,
          published: response.data.published,
          description: response.data.description,
          digital: response.data.digital,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Edit Book</h2>
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
            <label>published: </label>
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
          <div>
            <input
              type="submit"
              value="Edit Book"
              className="btn btn-caution"
            />
          </div>
        </form>
      </div>
    );
  }
}
