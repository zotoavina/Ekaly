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
  return await Order.find( {"plats.plat.parentresto": resto.id} , {plats:1, client: 1});
}

async function getById(orderId){
  return await Order.findById(orderId);
}

async function setDeliverer(orderId, deliverer){
  getById(orderId).then( (order) => {
    order.deliverer = deliverer;
    order.save();
    return order;
  })
}

async function updateStatusOrder(orderId, status){
  console.log(status);
  getById(orderId).then( (order) => {
    console.log(order);
    order.status = status;
    order.save();
    return order;
  })
}

async function getOrderByDeliverer(delivererId){
  return await Order.find({"deliverer.id": delivererId});
}



module.exports = {
  saveOrder,
  getAllOrders,
  findOrderOfRestaurant,
  setDeliverer,
  updateStatusOrder,
  getOrderByDeliverer
}




