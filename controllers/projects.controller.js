const Project = require('../models/Project');

const getAllProjects = (req, res) => {
    const page = req.query.page ?? 1;
    const limit = req.query.limit ?? 10;
    Project.getAll(page, limit)
        .then(projects => {
            res.status(200).json({
                status: 'OK',
                data: projects
            })
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                status: 'ERROR',
                message: 'There was an error with the server. Please try again later'
            })
        });
}

const createNewProject = (req, res) => {
    const title = req.body.title ?? '';
    const description = req.body.description ?? '';
    const stack = req.body.stack ?? [];
    // a project must have a title and description
    if (!title || !description) {
        res.status(400).json({
            status: 'ERROR',
            message: 'Project title and description are required'
        });
        return;
    }
    Project.insert(title, description, stack)
        .then(project => {
            res.status(201).json({
                status: 'OK',
                data: project
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                status: 'ERROR',
                message: 'There was an error with the server. Please try again later'
            });
        });
}

const getProject = (req, res) => {
    const id = req.params.projectId ?? 0;   
    Project.getById(id)
        .then((project) => {
            res.status(200).json({
                status: 'OK',
                data: project
            });
        })
        .catch(err => {
            res.status(404).json({
                status: 'ERROR',
                message: 'There is no project with id ' + id
            });
        });
}

const updateProject = (req, res) => {
    const id = req.params.projectId ?? 0;
    const projectUpdates = req.body.project ?? {};
    // check that some data is available
    if (!projectUpdates.title && !projectUpdates.description && !projectUpdates.stack) {
        res.status(400).json({
            status: 'ERROR',
            message: 'Some data must be provided'
        });
        return;
    }
    Project.edit(id, projectUpdates.title, projectUpdates.description, projectUpdates.stack)
        .then(project => {
            res.status(201).json({
                status: 'OK',
                data: project
            });
        })
        .catch(err => {
            res.status(404).json({
                status: 'ERROR',
                message: 'There is no project with id ' + id
            });
        });
}

const deleteProject = (req, res) => {
    const id = req.params.projectId ?? 0;   
    Project.delete(id)
        .then((project) => {
            res.status(200).json({
                status: 'OK',
                data: project
            });
        })
        .catch(err => {
            res.status(404).json({
                status: 'ERROR',
                message: 'There is no project with id ' + id
            });
        });
}

const addComment = (req, res) => {
    const id = req.params.projectId ?? 0;
    const comment = req.body.comment ?? '';
    if (!comment) {
        res.status(400).json({
            status: 'ERROR',
            message: 'Some data must be provided'
        });
        return;
    }
    Project.getById(id)
        .then((project) => {
            let comments = [...project.comments, { body: comment }];
            project.comments = comments;
            project.save()
                .then((projectWithNewComment) => {
                    res.status(201).json({
                        status: 'OK',
                        data: projectWithNewComment
                    });
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({
                        status: 'ERROR',
                        message: 'There was an error with the server. Please try again later'
                    });
                });
        })
        .catch((err) => {
            res.status(404).json({
                status: 'ERROR',
                message: 'There is no project with id ' + id
            });
        });
}

module.exports = {
    getAllProjects,
    createNewProject,
    getProject,
    updateProject,
    deleteProject,
    addComment
}