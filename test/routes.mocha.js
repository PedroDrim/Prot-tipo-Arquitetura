var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var buildapp = require('../bin/build/app');
var app = buildapp.Server.getApplication();

var assert = chai.assert;

describe('[1] Testando Rotas GET', () => {

  it('[1.1] Get index page', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, "text/html");
        done();
      })
  });

  it('[1.2] Get error 404', (done) => {
    chai.request(app)
      .get('/unknown')
      .end((err, res) => {
        assert.equal(res.status, 404);
        done();
      })
  });

});