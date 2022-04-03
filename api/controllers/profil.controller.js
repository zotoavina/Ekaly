const profilService = require('../services/profil.services');
const response = require('../helpers/response.helper');

const profilController = (url , router) => {

  router.post( `${url}/login`, (req, res) =>{
    const credentials = req.body;
     profilService.login(credentials);
  } );

  router.post( `${url}`, (req, res) => {
    profilService.register(req.body).then(
      () => response.success(res, null, "Registration success")
    ).catch( err => next(err) );
  })

}

module.exports = profilController;
