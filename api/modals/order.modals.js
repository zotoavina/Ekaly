const mongoose = require("mongoose");
const { Schema } = mongoose;
const {Profil, ProfilSchema} = require("./profil.modals");
const PlatSchema = require("./plat.modals");

const OrderItemSchema = new Schema({
  plat : PlatSchema,
  quantity: {
    type: Number,
    required: true
  },
  totalsellprice:{
    type: Number,
    required: true
  },
  totalbuyprice:{
    type: Number,
    required: true
  }
});

const OrderSchema = new Schema({
  client : ProfilSchema,
  plats: [ OrderItemSchema ],
  totalPrice : {
    type: Number,
    required: true
  },
  date : Date,
  status :{
    type: Number,
    required : true
  },
  deliverer: ProfilSchema
});

OrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
  }
})

const Order =  mongoose.model("order", OrderSchema);

module.exports = {
  Order,
  OrderSchema
};
