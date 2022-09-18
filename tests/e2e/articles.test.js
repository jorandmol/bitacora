const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

const app = require('../../app');

// describe('Test articles 📰 CRUD endpoints', () => {
//     let numOfArticles = 2;
//     let articleId = 1;

//     it('GET /articles should return a list of articles', (done) => {
//         request(app)
//             .get('/articles')
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(200);
//                 expect(res.body.articles.length).to.equal(numOfArticles);
//                 done();
//             });
//     });

//     it('POST /articles should return a new article', (done) => {
//         request(app)
//             .post('/articles')
//             .set('Content-Type', 'application/json')
//             .send({})
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(201);
//                 expect(res.body.article.title).to.equal('New Article');
//                 done();
//             });
//     });

//     it('GET /articles/:id should return a article', (done) => {
//         request(app)
//             .get(`/articles/${articleId}`)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(200);
//                 expect(res.body.article.title).to.equal(`Article ${articleId}`);
//                 done();
//             });
//     });

//     it('GET /articles/:id with unexisting id should return an error', (done) => {
//         request(app)
//             .get(`/articles/404`)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(404);
//                 done();
//             });
//     });

//     it('PUT /articles/:id should return the updated article', (done) => {
//         request(app)
//             .put(`/articles/${articleId}`)
//             .set('Content-Type', 'application/json')
//             .send({ title: `Updated Article ${articleId}` })
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(201);
//                 expect(res.body.article.title).to.equal(`Article ${articleId}`);
//                 done();
//             });
//     });

//     it('PUT /articles/:id with unexisting id should return an error', (done) => {
//         request(app)
//             .put(`/articles/404`)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(404);
//                 done();
//             });
//     });

//     it('DELETE /articles/:id should return OK', (done) => {
//         request(app)
//             .delete(`/articles/${articleId}`)
//             .set('Content-Type', 'application/json')
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(200);
//                 done();
//             });
//     });

//     it('DELETE /articles/:id with unexisting id should return an error', (done) => {
//         request(app)
//             .delete(`/articles/404`)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(404);
//                 done();
//             });
//     });
// });