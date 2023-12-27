const app = require('express')();
const { v4 } = require('uuid');

app.use(require('cors')());
app.use(require('cookie-parser')());

app.get('/api', (req, res) => {
  res.end(`Hello! ${v4()}`);
});

app.get('/api/set-cookie', (req, res) => {
  res.cookie('session', v4(), {
    httpOnly: true,
    secure: true,
  });

  res.end('cookie set');
})

app.get('/api/get-cookie', (req, res) => {
  res.end(`session cookie: ${req.cookies.session}`);
})

module.exports = app;