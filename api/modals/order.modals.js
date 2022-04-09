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
  totalbuyprice: {
    type: Number,
    required: false
  },
  totalsellprice: {
    type: Number,
    required: false
  }
});

const OrderSchema = new Schema({
  id :{
    type : String,
    required: false
  },
  client : ProfilSchema,
  plats: [ OrderItemSchema ],
  totalbuyprice : {
    type: Number,
    required: true
  },
  totalsellprice : {
    type: Number,
    required: true
  },
  date : Date,
  status : {
    type: Number,
    required: true
  },
  frais: {
    type: Number,
    required: false
  },
  deliverer: {
    type: ProfilSchema,
    required: false
  }
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
