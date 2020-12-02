const router = require("express").Router();
let Book = require("../models/book.model");

router.route("/").get((req, res) => {
  Book.find()
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addbook").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const genre = req.body.genre;
  const published = Number(req.body.published);
  const description = req.body.description;
  const digital = req.body.digital;

  const newBook = new Book({
    title,
    author,
    genre,
    published,
    description,
    digital,
  });

  newBook
    .save()
    .then(() => res.json("Book Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book Deleted :("))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updatebook/:id").post((req, res) => {
  Book.findByIdAndUpdate(req.params.id).then((book) => {
    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;
    book.published = Number(req.body.published);
    book.description = req.body.description;
    book.digital = req.body.digital;

    book
      .save()
      .then(() => res.json("Book information has been updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
