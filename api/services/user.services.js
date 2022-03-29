const users = [
  {name: "zotoavina"},
  {name: "njaratiana"},
  {name: "tahiana"}
]


module.exports = {

  login : function(req, res){
    res.json({ token: 'Token' });
  },

  findAll: function(req, res){
    return res.json(users);
  }

}
