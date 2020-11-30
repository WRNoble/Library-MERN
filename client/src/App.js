import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import BookList from "./components/bookList";
import EditBook from "./components/editBook";
import CreateBook from "./components/createBook";
import MovieList from "./components/movieList";
import CreateMovie from "./components/createMovie";
import EditMovie from "./components/editMovie";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={BookList} />
        <Route path="/updatebook/:id" component={EditBook} />
        <Route path="/addbook" component={CreateBook} />
        <Route path="/movie" exact component={MovieList} />
        <Route path="/updatemovie/:id" exact component={EditMovie} />
        <Route path="/addmovie" component={CreateMovie} />
      </div>
    </Router>
  );
}

export default App;
