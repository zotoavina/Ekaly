const response = require('response.services');
module.exports = {
  login : function(req, res, db){
    db.collection('profil').findOne(req.body, (error, result) => {
      if (error) throw error;
      console.log(result);
      response.success( res, result, "Login success");
    });
  },

  findAll: function(req, res, db){
    db.collection('profil').findOne({}, (error, result) => {
      if (error) throw error;
      res.json(result);
    });
  },

  addUser : function(req, res, db){
    db.collection('profil').insertOne( req.body, (error, result) => {
      if (error) throw error;
      res.json(result);
    })
  }


}
