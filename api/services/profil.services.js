const { Profil, ProfilSchema } = require('../modals/profil.modals');
const bcrypt = require('bcryptjs');
const jwt = require('../helpers/jwt.helper');

async function login({ email, password }) {
  const profil = await Profil.findOne({email});
  console.log(profil);
  if(profil == null) throw new Error("Incorrect Email or Password");
  if(bcrypt.compareSync(password, profil.password)){
      const token = jwt.generateAccessToken(email);
      return {...profil.toJSON(), token}
  }
  throw new Error("Incorrect Email or Password");
}


async function register(params){
  const {password} = params
  const salt = bcrypt.genSaltSync(10);
  params.password = bcrypt.hashSync(password, salt);
  params.state = 1;
  const profil = new Profil(params)
  return await profil.save();
}

async function getById(id) {
  return await Profil.findById(id);
}

async function updateProfil(profil){
  await profil.save();
}

async function findAllByType(types){
  var param = { type: types, state: Number.parseInt( process.env.ENABLED ) };
  return await Profil.find(param);
}



module.exports = {
  login,
  register,
  getById,
  updateProfil,
  findAllByType
};
