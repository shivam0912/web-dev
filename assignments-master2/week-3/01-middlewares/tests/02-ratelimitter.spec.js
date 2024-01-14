const app = require("../02-ratelimitter");
const request = require('supertest');

describe('GET /user', function () {
  const userId = 'testId';

  beforeEach(() => {
    // Reset the counter before each test
    app.locals.numberOfRequestsForUser = {};
  });

  it('One request responds back correctly', async () => {
    const response = await request(app).get('/user').set('user-id', userId);
    expect(response.status).toBe(200);
  });

  it('5 or more requests return back a 404', async () => {
    for (let i = 0; i < 5; i++) {
      await request(app).get('/user').set('user-id', userId);
    }

    const response = await request(app).get('/user').set('user-id', userId);
    expect(response.status).toBe(404);
  });

  it('5 or more requests and waiting returns a 200', async () => {
    for (let i = 0; i < 5; i++) {
      await request(app).get('/user').set('user-id', userId);
    }

    // Use a Promise to wait for a specific time
    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await request(app).get('/user').set('user-id', userId);
    expect(response.status).toBe(200);
  });
});
