import React, { Component } from "react";
import axios from "axios";

export default class SearchBookGenre extends Component {
  constructor(props) {
    super(props);

    this.onChangeAuthor = this.onChangeAuthor.bind(this);

    this.state = {
      title: "",
      author: "",
      genre: "",
      published: "",
      description: "",
      digital: "",
      selects: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5002/books/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          selects: res.data.map((select) => select.author),
          author: res.data[0].author,
        });
      }
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h4>Select By Author</h4>
        <select
          ref="userInput"
          required
          value={this.state.author}
          onChange={this.onChangeAuthor}
        >
          {this.state.selects.map(function (select) {
            return (
              <option key={select} value={select}>
                {select}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
