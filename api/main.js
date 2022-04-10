const { app } = require('./modules/app/app.module');
const mongoose = require('mongoose');
const profilController = require('./controllers/profil.controller');
const restaurantController = require('./controllers/restaurant.controller');
const orderController = require('./controllers/order.controller');
const delivererController = require('./controllers/deliverer.controller')
const mailer = require('./helpers/mailer.helper');


const uri = "mongodb://localhost:27017/ekaly";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));


async function main(){
  app.listen( process.env.PORT || 3030);
  profilController('/api/user', app);
  restaurantController('/api/restaurants',app);
  orderController('/api/orders', app);
  delivererController('/api/deliverers', app);
  app.get("/send/mail", (req, res) => {
    console.log("Start send mail");
    mailer.sendMail();
    console.log("End send mail");
    res.json({message: "OK"});
  })

}

module.exports = {main, app};
