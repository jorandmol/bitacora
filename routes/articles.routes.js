const express = require('express');

const articlesController = require('../controllers/articles.controller');

const router = express.Router();

router.route('/')
    .get(articlesController.getAllArticles)
    .post(articlesController.createNewArticle);

router.route('/:articleId')
    .get(articlesController.getArticle)
    .put(articlesController.updateArticle)
    .delete(articlesController.deleteArticle);

module.exports = router;