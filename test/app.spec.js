var request = require('supertest'),
    fulldata = require('./fulldata'),
    app = require('../server.js'),
    Q = require('q');

describe('Express Tests', function () {
  describe('GET /students', function () {
    it('should return complete student record data', function (done) {
      request(app).get('/students')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          expect(res.body).to.eql(fulldata);
          done();
        });
    });
  });
})