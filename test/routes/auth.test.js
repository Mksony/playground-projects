/* eslint-disable func-names, prefer-arrow-callback */
const request = require('supertest');

const app = require('../../app');

describe('Login route', function () {
  describe('GET /auth/login', function () {
    it('Should render login view', function (done) {
      request(app)
        .get('/auth/login')
        .expect(200)
        .expect('This is the login view')
        .end(done);
    });
  });
  describe('POST /auth/login', function () {
    it('Should let the user login', function (done) {
      request(app)
        .post('/auth/login')
        .expect(200)
        .expect('Welcome to the app')
        .end(done);
    });
  });
  describe('PUT /auth/login', function () {
    it('Should not allow PUT request', function (done) {
      request(app)
        .put('/auth/login')
        .expect(403)
        .end(done);
    });
  });
});

describe('Logout route', function () {
  describe('GET /auth/logout', function () {
    it('Should log the user out', function (done) {
      request(app)
        .get('/auth/logout')
        .expect(200)
        .expect('User logged out')
        .end(done);
    });
  });
});

describe('Logout route', function () {
  describe('POST /auth/register', function () {
    it('Should create a user', function (done) {
      request(app)
        .post('/auth/register')
        .expect(200)
        .expect('User created')
        .end(done);
    });
  });
});
