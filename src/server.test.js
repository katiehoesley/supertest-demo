const request = require('supertest'); 
let app = require('./server.js')

describe("Tests for katies cool api", () => {

  beforeEach(() => {
    delete require.cache[require.resolve('./server.js')]
    app = require('./server.js')
  })

  test("should return a json object with the name Katie", (done) => {
    request(app) 
      .get('/user')  
      .expect('Content-Type', /json/) 
      .expect('Content-Length', '16')
      .expect(200, {name: 'Katie'})
      .end((err, res) => {  
        if (err) done(err)
        return done()
      });
  })

  test("should return the word POLO! when hitting /marco endpoint", (done) => {
    request(app) 
    .get('/marco')  
    .expect('Content-Type', "text/html; charset=utf-8") 
    .expect('Content-Length', '5')
    .expect(200, 'POLO!')
    .end((err, res) => {  
      if (err) done(err)
      return done()
    })
  });

  it('GETs the expected data from marco endpoint', async () => {
    const res = await request(app).get('/marco')
    let expected = (res.text)
    expect(expected).toEqual("POLO!")
  })
  
  it('responds with json', (done) => {
    request(app)
      .post('/users')
      .send({name: 'john'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });

  app.close()
  
})

