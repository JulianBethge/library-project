const Book = require("../models/Book.model");

const router = require("express").Router();


router.get("/books", (req, res, next) => {
  Book.find()
    .then( booksFromDB => {
        res.render("books/books-list", {books: booksFromDB})
    })
    .catch( err => console.log("error getting books from DB", err))
});

module.exports = router;
