const restaurantService = require('../services/restaurant.services');
const response = require('../helpers/response.helper');

const restaurantController = ( url ,router ) => {
  router.get(url, (req, res) => {
    restaurantService.findRestaurants().then(
      (restaurants) => response.success(res, restaurants, "Restaurants selected")
      );
  })

  router.post(`${url}/addPlat`, (req, res) => {
    var restaurant = req.body;
    var files = req.files;
    restaurant.plat = JSON.parse(restaurant.plat);
    console.log(restaurant);
    restaurantService.addPlates(restaurant, files).then( (restaurant) => response.success(res, restaurant, "Add plat success")  );
  })
}


module.exports = restaurantController;
