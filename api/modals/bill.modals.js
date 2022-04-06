const mongoose = require("mongoose");
const { Schema } = mongoose;
const {Profil, ProfilSchema} = require("./profil.modals");
const PlatSchema = require("./plat.modals");

const OrderSchema = new Schema({
  plat : PlatSchema,
  quantity: {
    type: Number,
    required: true
  }
});

const OrderSchema = new Schema({
  client : ProfilSchema,
  restoPlat : {
    resto: ProfilSchema,
    plats: [ OrderSchema ]
  },
  totalPrice : {
    type: Number,
    required: true
  },
  date : Date
});

OrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
  }
})

const Order =  mongoose.model("order", ProfilSchema);

module.exports = {
  Order,
  OrderSchema
}




