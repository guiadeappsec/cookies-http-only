const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  res.end(`Hello! ${v4()}`);
});

module.exports = app;