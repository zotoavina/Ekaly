const dotenv = require('dotenv');

const profilService = require('./profil.services');
const fileHelper = require('../helpers/file.helper');
const { Profil, ProfilSchema } = require('../modals/profil.modals');

dotenv.config();

async function insertRestaurant(restaurant, files){
  console.log(process.env.RESTO_IMG);
  var fileData = fileHelper.uploadFile(files, process.env.RESTO_IMG);
  console.log(fileData);
  restaurant.avatar = fileData.data.path;
  console.log(restaurant);
  return profilService.register(restaurant);
}

async function findRestaurants(){
  return  profilService.findAllByType("restaurant");
}

async function addPlates(restaurant, files){
  console.log(restaurant);
  const resto = await profilService.getById(restaurant.id);
  var fileData = fileHelper.uploadFile(files, process.env.PLAT_IMG);
    console.log(resto);
    restaurant.plat.status = true;
    restaurant.plat.avatar = fileData.data.path;
    resto.plats.push(restaurant.plat);
    return profilService.updateProfil(resto);
}

async function deleteRestaurant(restaurant){
  profilService.getById(restaurant.id).then( resto => {
    resto.state = Number.parseInt( process.env.DISABLED );
    console.log(resto);
    profilService.updateProfil(resto);
  })
}

async function deletePlat(restaurant){
  console.log(restaurant);
  profilService.getById(restaurant.id).then( resto => {
    console.log(resto);
    changePlat(resto, restaurant.plat);
    console.log(resto);
    profilService.updateProfil(resto);
  })
}

function changePlat(restaurant, platId){
   var plats = restaurant.plats;
   for(var i = 0; i < plats.length; i++){
     console.log(plats[i]._id.toString());
     if(plats[i]._id.toString() == platId){
       plats[i].status = false;
       console.log("delete plat");
       console.log(plats[i]);
     }
   }
}

async function findPlats(){
  return await Profil.find({type:"restaurant"}, {plats:1});
}


module.exports = {
  findRestaurants,
  addPlates,
  insertRestaurant,
  deleteRestaurant,
  deletePlat,
  findPlats
}


