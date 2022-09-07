const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./db');

const app = express();

const projectRouter = require('./routes/project.routes');
const bookRouter = require('./routes/book.routes');
const articleRouter = require('./routes/article.routes');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to BITACORA-API' });
});

app.use('/projects', projectRouter);
app.use('/books', bookRouter);
app.use('/articles', articleRouter);

module.exports = app;