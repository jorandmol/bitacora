const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.status(200).json({ message: 'Get books OK!' });
    })
    .post((req, res) => {
        res.status(201).json({ message: 'Create book OK!' });
    });

router.route('/:bookId')
    .get((req, res) => {
        res.status(200).json({ message: `Get book ${req.params.bookId} OK!` });
    })
    .put((req, res) => {
        res.status(201).json({ message: `Update book ${req.params.bookId} OK!` });
    })
    .delete((req, res) => {
        res.status(200).json({ message: `Delete book ${req.params.bookId} OK!` });
    });

module.exports = router;