const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

const app = require('../../app');

// describe('Test books 📖 CRUD endpoints', () => {
//     let numOfBooks = 2;
//     let bookId = 1;

//     it('GET /books should return a list of books', (done) => {
//         request(app)
//             .get('/books')
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(200);
//                 expect(res.body.books.length).to.equal(numOfBooks);
//                 done();
//             });
//     });

//     it('POST /books should return a new book', (done) => {
//         request(app)
//             .post('/books')
//             .set('Content-Type', 'application/json')
//             .send({})
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(201);
//                 expect(res.body.book.title).to.equal('New Book');
//                 done();
//             });
//     });

//     it('GET /books/:id should return a book', (done) => {
//         request(app)
//             .get(`/books/${bookId}`)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(200);
//                 expect(res.body.book.title).to.equal(`Book ${bookId}`);
//                 done();
//             });
//     });

//     it('GET /books/:id with unexisting id should return an error', (done) => {
//         request(app)
//             .get(`/books/404`)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(404);
//                 done();
//             });
//     });

//     it('PUT /books/:id should return the updated book', (done) => {
//         request(app)
//             .put(`/books/${bookId}`)
//             .set('Content-Type', 'application/json')
//             .send({ title: `Updated Book ${bookId}` })
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(201);
//                 expect(res.body.book.title).to.equal(`Book ${bookId}`);
//                 done();
//             });
//     });

//     it('PUT /books/:id with unexisting id should return an error', (done) => {
//         request(app)
//             .put(`/books/404`)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(404);
//                 done();
//             });
//     });

//     it('DELETE /books/:id should return OK', (done) => {
//         request(app)
//             .delete(`/books/${bookId}`)
//             .set('Content-Type', 'application/json')
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(200);
//                 done();
//             });
//     });

//     it('DELETE /books/:id with unexisting id should return an error', (done) => {
//         request(app)
//             .delete(`/books/404`)
//             .end((err, res) => {
//                 expect(res.statusCode).to.equal(404);
//                 done();
//             });
//     });
// });