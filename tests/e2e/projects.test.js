const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

const app = require('../../app');

const Project = require('../../models/Project');

describe('Test projects ⚙ CRUD endpoints', () => {
    let projectToSave;
    let projectToDelete;

    before(async () => {
        projectToSave = await Project.insert('ProjectToSave', 'Its description', []);
        projectToDelete = await Project.insert('ProjectToDelete', 'Its description', []);
    });

    it('GET /projects should return a list of projects', (done) => {
        request(app)
            .get('/projects')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body.data.length).to.equal(2);
                done();
            });
    });

    it('POST /projects should return a new project', (done) => {
        request(app)
            .post('/projects')
            .set('Content-Type', 'application/json')
            .send({ title: 'New Project', description: 'The new project\'s description' })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body.data.title).to.equal('New Project');
                done();
            });
    });

    it('GET /projects/:id should return a project', (done) => {
        request(app)
            .get(`/projects/${projectToSave._id}`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body.data.title).to.equal('ProjectToSave');
                done();
            });
    });

    it('GET /projects/:id with unexisting id should return an error', (done) => {
        request(app)
            .get(`/projects/404`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                done();
            });
    });

    it('PUT /projects/:id should return the updated project', (done) => {
        request(app)
            .put(`/projects/${projectToSave._id}`)
            .set('Content-Type', 'application/json')
            .send({ project: {
                title: 'Updated ProjectToSave'
            } })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body.data.title).to.equal('Updated ProjectToSave');
                done();
            });
    });

    it('PUT /projects/:id with unexisting id should return an error', (done) => {
        request(app)
            .put(`/projects/404`)
            .send({ project: {
                title: 'Updated ProjectToSave'
            } })
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                done();
            });
    });

    it('PUT /projects/:id with no data sent should return an error', (done) => {
        request(app)
            .put(`/projects/${projectToSave._id}`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                done();
            });
    });

    it('DELETE /projects/:id should return OK', (done) => {
        request(app)
            .delete(`/projects/${projectToDelete._id}`)
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });

    it('DELETE /projects/:id with unexisting id should return an error', (done) => {
        request(app)
            .delete(`/projects/404`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                done();
            });
    });

    after(async () => {
        let projects = await Project.getAll();
        projects.forEach(async (project) => {
            await Project.delete(project._id);
        });
    });
});