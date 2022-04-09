const profilService = require('./profil.services');
const fileHelper = require('../helpers/file.helper');
const { Profil, ProfilSchema } = require('../modals/profil.modals');
// const dotenv = require('dotenv');
// dotenv.config();


// selection des livreurs
async function getAllDeliverers(){
  return await profilService.findAllByType("deliverer");
}

async function addDeliverer(deliverer, files){
  console.log(process.env.DELIVERER_IMG);
  var fileData = fileHelper.uploadFile(files, process.env.DELIVERER_IMG);
  console.log(fileData);
  deliverer.avatar = fileData.data.path;
  console.log(deliverer);
  return await profilService.register(deliverer)
}

async function deleteDeliverer(deliverer){
  profilService.getById( deliverer.id ).then( (deliverer) =>{
    deliverer.state = Number.parseInt( process.env.DISABLED );
    profilService.updateProfil(deliverer);
  } )
}

async function updateDeliverer(){

}

module.exports = {
  getAllDeliverers,
  deleteDeliverer,
  updateDeliverer,
  addDeliverer
}
