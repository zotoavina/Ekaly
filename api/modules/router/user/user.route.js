const userService = require('../../../services/user.services');
const userRouter = (url, app) => {
  app.get(`${url}/all`, userService.findAll);
  app.post(`${url}/user`, userService.login)
}

module.exports = userRouter;
