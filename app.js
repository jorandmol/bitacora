const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to BITACORA-API' });
});

module.exports = app;