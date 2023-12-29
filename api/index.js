const app = require('express')();
const { v4 } = require('uuid');

app.use(require('cookie-parser')());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.header('Origin'));
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


app.get('/api', (req, res) => {
  res.end(`Hello! ${v4()}`);
});

app.get('/api/set-cookie', (req, res) => {
  res.cookie('session', v4(), {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60,
    sameSite: 'none',
    domain: 'cookies-http-only.vercel.app',
  });

  res.end('cookie set');
})

app.get('/api/get-cookie', (req, res) => {
  res.end(`session cookie: ${req.cookies.session}`);
})

module.exports = app;