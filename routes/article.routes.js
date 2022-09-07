const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.status(200).json({ message: 'Get articles OK!' });
    })
    .post((req, res) => {
        res.status(201).json({ message: 'Create article OK!' });
    });

router.route('/:articleId')
    .get((req, res) => {
        res.status(200).json({ message: `Get article ${req.params.articleId} OK!` });
    })
    .put((req, res) => {
        res.status(201).json({ message: `Update article ${req.params.articleId} OK!` });
    })
    .delete((req, res) => {
        res.status(200).json({ message: `Delete article ${req.params.articleId} OK!` });
    });

module.exports = router;