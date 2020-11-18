const router = require("express").Router();
const Book = require("../models/book.model");
let Movie = require("../models/movie.model");

router.route("/").get((req, res) => {
  Movie.find()
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addmovie").post((req, res) => {
  const title = req.body.title;
  const director = req.body.director;
  const genre = req.body.genre;
  const released = Number(req.body.released);
  const digital = Boolean(req.body.digital);

  const newMovie = Movie({
    title,
    director,
    genre,
    released,
    digital,
  });

  newMovie
    .save()
    .then(() => res.json("Movie Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => res.json(movie))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json("Movie was deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Movie.findByIdAndUpdate(req.params.id).then((movie) => {
    movie.title = req.body.title;
    movie.director = req.body.director;
    movie.genre = req.body.genre;
    movie.released = Number(req.body.released);
    movie.digital = Boolean(req.body.digital);

    movie
      .save()
      .then(() => res.json("Movie has been updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
