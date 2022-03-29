const { app } = require('./modules/app/app.module');
const userRouter = require('./modules/router/user/user.route');

async function main(){
  app.listen( process.env.PORT || 3030);
  userRouter('/api/user', app);
}

module.exports = {main, app};
