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
    it('should return 400', function (done) {
        server
            .post('/api/users')
            .expect(400)
            .end(function (err, res) {
                res.status.should.equal(400);
                done();
            });
    });
});