import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Book = (props) => (
  <div>
    <p>{props.book.title}</p>
    <p>{props.book.author}</p>
    <p>{props.book.genre}</p>
    <p>{props.book.published}</p>
    <p>{props.book.description}</p>
    <p>{props.book.digital}</p>
    <Link to={"/update/" + props.book.id}>Edit Book</Link> |{" "}
    <a
      href="#"
      onClick={() => {
        props.deleteBook(props.book._id);
      }}
    >
      Delete Book
    </a>
  </div>
);
