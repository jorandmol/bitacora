const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

const app = require('../../app');

describe('Test projects ⚙ CRUD endpoints', () => {
    let numOfProjects = 2;
    let projectId = 1;

    it('GET /projects should return a list of projects', (done) => {
        request(app)
            .get('/projects')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body.projects.length).to.equal(numOfProjects);
                done();
            });
    });

    it('POST /projects should return a new project', (done) => {
        request(app)
            .post('/projects')
            .set('Content-Type', 'application/json')
            .send({})
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body.project.title).to.equal('New Project');
                done();
            });
    });

    it('GET /projects/:id should return a project', (done) => {
        request(app)
            .get(`/projects/${projectId}`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body.project.title).to.equal(`Project ${projectId}`);
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
            .put(`/projects/${projectId}`)
            .set('Content-Type', 'application/json')
            .send({ title: `Updated Project ${projectId}` })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                expect(res.body.project.title).to.equal(`Project ${projectId}`);
                done();
            });
    });

    it('PUT /projects/:id with unexisting id should return an error', (done) => {
        request(app)
            .put(`/projects/404`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(404);
                done();
            });
    });

    it('DELETE /projects/:id should return OK', (done) => {
        request(app)
            .delete(`/projects/${projectId}`)
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
});