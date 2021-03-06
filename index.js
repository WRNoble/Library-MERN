const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const booksRouter = require("./routes/books");
const moviesRouter = require("./routes/movies");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5002;

//middleware
app.use(cors());
app.use(express.json());
app.use("/books", booksRouter);
app.use("/movies", moviesRouter);

//connect to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to library Database!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
