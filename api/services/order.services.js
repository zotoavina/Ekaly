const {Order, OrderSchema} = require('../modals/order.modals');

async function saveOrder(order){
  return await Order.save(order);
}

async function getAllOrders(){
  return await Order.find({});
}


module.exports = {
  saveOrder,
  getAllOrders
}




