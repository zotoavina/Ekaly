const { app } = require('./modules/app/app.module');
const mongoose = require('mongoose');
const userRouter = require('./modules/router/user/user.route');
const profilController = require('./controllers/profil.controller');


const uri = "mongodb://localhost:27017/ekaly";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));


async function main(){
  app.listen( process.env.PORT || 3030);
  profilController('/api/user', app);
}

module.exports = {main, app};
