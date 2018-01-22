const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:3000');

describe('POST method', function () {
    it('should return 201', function (done) {
        server
            .post('/api/users')
            .expect('Content-type', /json/)
            .expect(201)
            .end(function (err, res) {
                res.status.should.equal(201);
                res.body.error.should.equal(false);
                done();
            });
    });
    it('should return user data in body', function (done) {
        server
            .post('/api/users')
            .send({
                name: 'Marie',
                password: '087784j',
                address: 'Barbel-Bohley Str. 1',
                dob: '1987-12-17',
                description: 'Ich wohne in Berlin.',
                createdAt: '2018-01-18T00:00:00.000Z'
            })
            .expect('Content-type', /json/)
            .expect(201)
            .end(function (err, res) {
                res.status.should.equal(201);
                res.body.error.should.equal(false);
                res.body.data.should.equal({
                    name: 'Marie',
                    password: '087784j',
                    address: 'Barbel-Bohley Str. 1',
                    dob: '1987-12-17',
                    description: 'Ich wohne in Berlin.',
                    createdAt: '2018-01-18T00:00:00.000Z'
                });
                done();
            });
    });
    it('should return 400 BAD REQUEST', function (done) {
        server
            .post('/api/users')
            .expect(400)
            .end(function (err, res) {
                res.status.should.equal(400);
                done();
            });
    });
});

describe('GET method', function () {
    it('should return 200', function (done) {
        server
            .get('/api/users')
            .expect('Content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.error.should.equal(false);
                done();
            });
    });
    it('should return list of users in body', function (done) {
        server
            .get('/api/users')
            .expect('Content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.error.should.equal(false);
                res.body.data.should.equal({
                    name: 'Marie',
                    password: '087784j',
                    address: 'Barbel-Bohley Str. 1',
                    dob: '1987-12-17',
                    description: 'Ich wohne in Berlin.',
                    createdAt: '2018-01-18T00:00:00.000Z'
                });
                done();
            });
    });
    it('should return 404 NOT FOUND', function (done) {
        server
            .post('/api/users')
            .expect(404)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });
});

describe('GET method, one user', function () {
    it('should return 200', function (done) {
        server
            .get('/api/users/1')
            .expect('Content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.error.should.equal(false);
                done();
            });
    });
    it('should return one user in body', function (done) {
        server
            .get('/api/users/1')
            .expect('Content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.error.should.equal(false);
                res.body.should.equal({
                    name: 'Marie',
                    password: '087784j',
                    address: 'Barbel-Bohley Str. 1',
                    dob: '1987-12-17',
                    description: 'Ich wohne in Berlin.',
                    createdAt: '2018-01-18T00:00:00.000Z'
                });
                done();
            });
    });
    it('should return 404 NOT FOUND', function (done) {
        server
            .post('/api/users/1')
            .expect(404)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });
});

describe('DELETE method', function () {
    it('should return 204', function (done) {
        server
            .get('/api/users/1')
            .expect('Content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(204);
                res.body.error.should.equal(false);
                done();
            });
    });
    it('should return 404 NOT FOUND', function (done) {
        server
            .post('/api/users/1')
            .expect(404)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });
});