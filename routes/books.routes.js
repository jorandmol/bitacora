const express = require('express');

const booksController = require('../controllers/books.controller');

const router = express.Router();

router.route('/')
    .get(booksController.getAllBooks)
    .post(booksController.createNewBook);

router.route('/:bookId')
    .get(booksController.getBook)
    .put(booksController.updateBook)
    .delete(booksController.deleteBook);

module.exports = router;