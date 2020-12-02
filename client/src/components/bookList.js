import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Book = (props) => (
  <tr>
    <td>{props.book.title}</td>
    <td>{props.book.author}</td>
    <td>{props.book.genre}</td>
    <td>{props.book.published}</td>
    <td>{props.book.description}</td>
    <td>{props.book.digital}</td>
    <td>
      <Link to={"/updatebook/" + props.book._id}>Edit Book</Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteBook(props.book._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class BookList extends Component {
  constructor(props) {
    super(props);

    this.deleteBook = this.deleteBook.bind(this);

    this.state = { books: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5002/books/")
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteBook(id) {
    axios.delete("http://localhost:5002/books/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      books: this.state.books.filter((el) => el._id !== id),
    });
  }

  bookList() {
    return this.state.books.map((currentbook) => {
      return (
        <Book
          book={currentbook}
          deleteBook={this.deleteBook}
          key={currentbook._id}
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
              <th>Author</th>
              <th>Genre</th>
              <th>Published</th>
              <th>Description</th>
              <th>Digital</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.bookList()}</tbody>
        </table>
      </div>
    );
  }
}
