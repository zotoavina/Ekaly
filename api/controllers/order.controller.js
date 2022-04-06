const orderService = require('../services/order.services');
const response = require('../helpers/response.helper');

const orderController = (url, router) => {
  router.post(`${url}`, (req,res) => {
    const order = req.body;
    console.log(order);
    orderService.saveOrder(order).then( ()=> response.success(res, null, "Order inserted with success"));
  });

  router.get(`${url}`, (req, res) => {
    orderService.getAllOrders().then( (orders) => response.success(res, orders, "Orders selected"))
  });
}

module.exports = orderController;

