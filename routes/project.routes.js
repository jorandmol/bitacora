const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.status(200).json({ message: 'Get projects OK!' });
    })
    .post((req, res) => {
        res.status(201).json({ message: 'Create project OK!' });
    });

router.route('/:projectId')
    .get((req, res) => {
        res.status(200).json({ message: `Get project ${req.params.projectId} OK!` });
    })
    .put((req, res) => {
        res.status(201).json({ message: `Update project ${req.params.projectId} OK!` });
    })
    .delete((req, res) => {
        res.status(200).json({ message: `Delete project ${req.params.projectId} OK!` });
    });

module.exports = router;