const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const expressUnless = require('express-unless');
const jwt = require('../../helpers/jwt.helper');
const errorHanlder = require('../../helpers/errorHandler.helper');
const app = express();

jwt.authenticateToken.unless = expressUnless;

app.use( cors() );
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept', 'Authorization');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

app.use(fileUpload({
  createParentPath: true,
  limits: {
      fileSize: 1024 * 1024 * 1024 //1MB max file(s) size
  },
}));

app.use('/uploads', express.static('uploads'));
app.use(express.static('dist/ekaly-front'));

app.use(jwt.authenticateToken.unless({
  path: [
    {url : "/api/user/login", methods: ['POST']},
    {url: "/api/user", methods: ['POST']},
  ]
}))

app.use(errorHanlder.errorHandler);


app.use(express.json());
app.use(express.urlencoded( { extended : false }));

module.exports = { app };
