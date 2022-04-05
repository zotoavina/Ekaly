const profilService = require('./profil.services');


async function findRestaurants(){
  return profilService.findAllByType("restaurant");
}

async function addPlates(restaurantId, plat){
  var restaurant = profilService.getById(restaurantId);
  restaurant.plates.push(plat);
  profilService.updateProfil(restaurant);
}


module.exports = {
  findRestaurants,
  addPlates
}


