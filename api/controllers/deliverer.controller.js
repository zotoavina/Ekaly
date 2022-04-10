const response = require('../helpers/response.helper');
const delivererService = require('../services/deliverer.services');


const delivererController = (url, router) =>{
  router.get(url, (req, res) => {
    delivererService.getAllDeliverers().then( (deliverers) => response.success(res, deliverers, "deliverers selected"))
  })

  router.post(url, (req, res) => {
    var data = req.body;
    console.log(data);
    var deliverer = JSON.parse( data.deliverer );
    var files = req.files;
    delivererService.addDeliverer(deliverer, files).then( (deliver) => response.success(res, deliver, "deliverer added") )
  })

  router.post(`${url}/delete`, (req, res) => {
    delivererService.deleteDeliverer(req.body).then( (deliverer) => response.success(res, deliverer, "deliverer deleted"))
  })
}

module.exports = delivererController
