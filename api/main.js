const { app } = require('./modules/app.module');
const UserRouter = require('/modules/router/user/user.router');

async function main(){
  app.listen( process.env.PORT || 3030);
  UserRouter('/api/user', app);
}

module.exports = {main, app};
