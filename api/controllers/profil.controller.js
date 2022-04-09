const profilService = require('../services/profil.services');
const response = require('../helpers/response.helper');
const URL = require('url');

const profilController = (url , router) => {


  // login
  router.post( `${url}/login`, (req, res) =>{
    const credentials = req.body;
     profilService.login(credentials).then(
       (profil) => response.success(res, profil, "Log in success")
     ).catch( err => response.error(res, err.message));
  } );

  // inscription
  router.post( `${url}`, (req, res) => {
    profilService.register(req.body).then(
      () => response.success(res, null, "Registration success")
    ).catch( err => response.error(res, "Error during registration") );
  })

  // find profil  by id
  router.get( `${url}/:id`, (req, res) => {
    console.log(req.params);
    profilService.getById( req.params.id ).then( (restaurant) => response.success(res, restaurant, "Selected profil"));
  })

}

module.exports = profilController;
