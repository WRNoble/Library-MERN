import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={BookList} />
        <Route path="/updatebook/:id" component={EditBook} />
        <Route path="/addbook" component={CreateBook} />
        <Route path="/movie" component={MovieList} />
        <Route path="/updatemovie/:id" component={EditMovie} />
        <Route path="/addmovie" component={CreateMovie} />
      </div>
    </Router>
  );
}

export default App;
