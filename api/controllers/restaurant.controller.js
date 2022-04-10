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
    restaurantService.addPlates(restaurant, files).then( (restaurant) =>{
      console.log("Controlleur");
      console.log(restaurant);
      response.success(res, restaurant, "Add plat success")
    });

  })

  router.post(url, (req, res) => {
    var data = req.body;
    console.log(data);
    var restaurant = JSON.parse( data.restaurant );
    var files = req.files;
    restaurantService.insertRestaurant(restaurant, files).then(
      (restaurant) => response.success(res, restaurant, "Restaurant added with success")
    );
  })

  router.post(`${url}/delete`, (req, res) => {
    var restaurant = req.body;
    console.log(restaurant);
    restaurantService.deleteRestaurant(restaurant).then(
       () => response.success(res, restaurant, "Restaurant deleted")
    )
  })

  router.post(`${url}/delete/plat`, (req, res) => {
    var restaurant = req.body;
    console.log(restaurant);
    restaurantService.deletePlat(restaurant).then(
       () => response.success(res, restaurant, "Plat deleted")
    )
  })

  router.get(`${url}/search`, (req, res) => {
    restaurantService.findPlats().then(
       (plats) => response.success(res, plats, "Plats selected")
    )
  })

}


module.exports = restaurantController;
