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
        date:  '2023-03-20',
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('App event success');
  });

   it('should return an error if title is missing', async () => {
     const response = await request(app)
       .post('/events')
       .send({
         title: '',
         date:  '2023-03-22',
      });
     expect(response.statusCode).toBe(500);
     expect(response.body.message).toBe("ER_BAD_NULL_ERROR: Column 'title' cannot be null");
   });

   it('should return an error if date is missing', async () => {
     const response = await request(app)
      .post('/events')
      .send({
        title: 'Test Event',
        date:  '',
       });
     expect(response.statusCode).toBe(500);
     expect(response.body.message).toBe("ER_BAD_NULL_ERROR: Column 'date' cannot be null");
  });
 });




