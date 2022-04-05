const profilService = require('./profil.services');


async function findRestaurants(){
  return profilService.findAllByType("Restaurant").toJSON();
}


module.exports = {
  findRestaurants
}


