const userService = require('../../../services/user.services');

var MongoClient = require('mongodb').MongoClient;
const urlString = "mongodb://localhost:27017/";
const database = "ekaly";


const userRouter = (url, app) => {
  MongoClient.connect(urlString, (error, client) => {
    if(error) throw error;
    var dbo = client.db(database);
    app.get(`${url}/all`, (req, res) => { userService.findAll(req, res, dbo) });
    app.post(`${url}/user`, (req, res) =>{ userService.addUser(req, res, dbo)} );
    app.post(`${url}/login`, (req, res) =>{ userService.login(req, res, dbo)} );
  })
}

module.exports = userRouter;
