const restaurantService = require('../services/restaurant.services');
const response = require('../helpers/response.helper');

const restaurantController = ( url ,router ) => {
  router.get(url, (req, res) => {
    restaurantService.findRestaurants().then(
      (restaurants) => response.success(res, restaurants, "Restaurants selected")
      );
  })

  router.post(url, )
}


module.exports = restaurantController;
