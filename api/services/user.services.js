const response = require('./response.services');
module.exports = {
  login : function(req, res, db){
    db.collection('profil').findOne(req.body, (error, result) => {
      if (error) throw error;
      if(result == null) response.error(res, "Mot de passe ou email non valide");
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
      response.success( res, null, "Inscription success");
    })
  }


}
