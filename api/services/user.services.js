const users = [
  {name: "zotoavina"},
  {name: "njaratiana"},
  {name: "tahiana"}
]

module.exports = {
  login : function(req, res, db){
    db.collection('profil').findOne(req.body, (error, result) => {
      if (error) throw error;
      console.log(result);
      res.json(result);
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
