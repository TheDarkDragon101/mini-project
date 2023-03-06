import app from "./index";
import request from 'supertest'

//Jest test
 // assuming your express app is in app.js

 describe('POST /events', () => {
  it('should insert a new event into the database', async () => {
    const response = await request(app)
      .post('/events')
      .send({
        title: 'Test Event',
        date:  '2023-03-31',
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('App event success');
  });
 })




