/* eslint-disable func-names, prefer-arrow-callback */
const request = require('supertest');
const { expect } = require('chai');

const app = require('../../app');

describe('Login route', function () {
  describe('GET /auth/login', function () {
    it('Should render login view', async function () {
      const response = await request(app).get('/auth/login');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('This is the login view');
    });
  });
  describe('POST /auth/login', function () {
    it('Should let the user login', async function () {
      const response = await request(app).post('/auth/login');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('Welcome to the app');
    });
  });
  describe('PUT /auth/login', function () {
    it('Should not allow PUT request', async function () {
      const response = await request(app).put('/auth/login');
      expect(response.status).to.equal(403);
    });
  });
});

describe('Logout route', function () {
  describe('GET /auth/logout', function () {
    it('Should log the user out', async function () {
      const response = await request(app).get('/auth/logout');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('User logged out');
    });
  });
});

describe('Logout route', function () {
  describe('POST /auth/register', function () {
    it('Should create a user', async function () {
      const response = await request(app).post('/auth/register');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('User created');
    });
  });
});
