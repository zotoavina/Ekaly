const { Profil, ProfilSchema } = require('../modals/profil.modals');
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
  params.state = 1;
  const profil = new Profil(params)
  await profil.save();
}

async function getById(id) {
  return await Profil.findById(id);
}

async function updateProfil(profil){
  await Profil.updateOne(profil);
}

async function findAllByType(type){
  return await Profil.find({type})
}



module.exports = {
  login,
  register,
  getById,
  updateProfil,
  findAllByType
};
