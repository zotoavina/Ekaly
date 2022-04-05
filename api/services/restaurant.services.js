const profilService = require('./profil.services');


async function findRestaurants(){
  return profilService.findAllByType("restaurant");
}


module.exports = {
  findRestaurants
}


