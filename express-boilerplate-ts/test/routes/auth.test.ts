/* eslint-disable func-names, prefer-arrow-callback */
import * as request from 'supertest';

import app from '../../app';

describe('Login route', () => {
  describe('GET /auth/login', () => {
    it('Should render login view', async () => {
      const response = await request(app).get('/auth/login');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('This is the login view');
    });
  });
  describe('POST /auth/login', () => {
    it('Should let the user login', async () => {
      const response = await request(app).post('/auth/login');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Welcome to the app');
    });
  });
  describe('PUT /auth/login', () => {
    it('Should not allow PUT request', async () => {
      const response = await request(app).put('/auth/login');
      expect(response.status).toEqual(403);
    });
  });
});

describe('Logout route', function() {
  describe('GET /auth/logout', function() {
    it('Should log the user out', async function() {
      const response = await request(app).get('/auth/logout');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('User logged out');
    });
  });
});

describe('Logout route', function() {
  describe('POST /auth/register', function() {
    it('Should create a user', async function() {
      const response = await request(app).post('/auth/register');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('User created');
    });
  });
});
