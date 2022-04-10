const response = require('./response.helper');

function errorHandler(err, req, res, next) {
  if (typeof (err) === 'string') {
      // custom application error
      // return res.status(400).json({ message: err });
      response.error(res, err.message);
  }

  if (err.name === 'ValidationError') {
      // mongoose validation error
      // return res.status(400).json({ message: err.message });
      response.error(res, err.message);
  }

  if (err.name === 'UnauthorizedError') {
      // jwt authentication error
      // return res.status(401).json({ message: 'Token not valid' });
      response.error(401, "Token not valid");
  }

  // default to 500 server error
  // return res.status(500).json({ message: err.message });
   response.error(500, err.message);
}

module.exports = {
  errorHandler
}
