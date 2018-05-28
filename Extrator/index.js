var express = require('express');
var app = express()
  .get('/', function (req, res) {
    res.send('Working!');
  })
  .listen(5000, function() {
    console.log('Outra aplicação executando na porta 5000');
  });
