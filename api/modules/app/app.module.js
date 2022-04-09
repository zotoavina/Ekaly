const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const expressUnless = require('express-unless');
const jwt = require('../../helpers/jwt.helper');
const errorHanlder = require('../../helpers/errorHandler.helper');
const app = express();

jwt.authenticateToken.unless = expressUnless;


app.use(fileUpload({
  createParentPath: true,
  limits: {
      fileSize: 1024 * 1024 * 1024 //1MB max file(s) size
  },
}));

app.use(jwt.authenticateToken.unless({
  path: [
    {url : "/api/user/login", methods: ['POST']},
    {url: "/api/user", methods: ['POST']}
  ]
}))

app.use(errorHanlder.errorHandler);

app.use('/uploads', express.static('uploads'));
app.use(express.static('dist/ekaly-front'));
app.use(express.json());
app.use(express.urlencoded( { extended : false }));
app.use( cors() );
module.exports = { app };
