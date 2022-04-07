const { Order, OrderSchema}  = require('../modals/order.modals');

async function saveOrder(orderParam){
  const order = new Order(orderParam);
  await order.validate();
  return order.save();
}

async function getAllOrders(){
  return await Order.find({});
}




module.exports = {
  saveOrder,
  getAllOrders
}




