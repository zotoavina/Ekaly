const profilService = require('../services/profil.services');
const response = require('../helpers/response.helper');

const profilController = (url , router) => {

  router.post( `${url}/login`, (req, res) =>{
    const credentials = req.body;
     profilService.login(credentials).then(
       (profil) => response.success(res, profil, "Log in success")
     )
  } );

  router.post( `${url}`, (req, res) => {
    profilService.register(req.body).then(
      () => response.success(res, null, "Registration success")
    ).catch( err => response.error(res, "Error during registration") );
  })

}

module.exports = profilController;
