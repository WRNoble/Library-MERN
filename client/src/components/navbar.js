import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          LIBRARY
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/addbook" className="nav-link">
                Add Book
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/movie" className="nav-link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addmovie" className="nav-link">
                Add Movie
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
