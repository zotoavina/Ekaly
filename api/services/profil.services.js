const Profil = require('../modals/profil.modals');
const bcrypt = require('bcryptjs');
const jwt = require('../helpers/jwt.helper');

async function login({ email, password }) {
  const profil = await Profil.findOne({email});
  console.log(profil);
  if(bcrypt.compareSync(password, profil.password)){
      const token = jwt.generateAccessToken(email);
      return {...profil.toJSON(), token}
  }
}


async function register(params){
  const {password} = params
  const salt = bcrypt.genSaltSync(10);
  params.password = bcrypt.hashSync(password, salt);
  const profil = new Profil(params)
  await profil.save();
}

async function getById(id) {

  const user = await Profil.findById(id);
  // call toJSON method applied during model instantiation
  return user.toJSON()
}

module.exports = {
  login,
  register,
  getById
};
