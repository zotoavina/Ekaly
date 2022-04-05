const profilService = require('./profil.services');
const fileHelper = require('../helpers/file.helper');


async function findRestaurants(){
  return profilService.findAllByType("restaurant");
}

async function addPlates(restaurant, files){
  profilService.getById(restaurant.id).then( resto => {
    console.log(resto);
    fileHelper.uploadFile(files);
    console.log(resto);
    resto.plats.push(restaurant.plat);
    profilService.updateProfil(resto);
  });
}


module.exports = {
  findRestaurants,
  addPlates
}


