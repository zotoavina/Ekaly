const { Order, OrderSchema}  = require('../modals/order.modals');

async function saveOrder(orderParam){
  orderParam.status = 0;
  orderParam.date = new Date();
  const order = new Order(orderParam);
  await order.validate();
  return order.save();
}

async function getAllOrders(){
  return await Order.find({});
}

async function findOrderOfRestaurant(resto){

}




module.exports = {
  saveOrder,
  getAllOrders
}




