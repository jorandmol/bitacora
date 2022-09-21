const express = require('express');

const projectsController = require('../controllers/projects.controller');

const router = express.Router();

router.route('/')
    .get(projectsController.getAllProjects)
    .post(projectsController.createNewProject);

router.route('/:projectId')
    .get(projectsController.getProject)
    .put(projectsController.updateProject)
    .delete(projectsController.deleteProject);

router.route('/:projectId/comments')
    .post(projectsController.addComment);

module.exports = router;