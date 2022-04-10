const mongoose = require("mongoose");
const { Schema } = mongoose;
const plat = require("./plat.modals");


const ProfilSchema = new Schema({
    id :{
      type : String,
      required: false
    },
    firstname: {
        type: String,
        required: false,
    },
    lastname:{
      type: String,
      required: false
    },
    avatar:{
      type: String,
      required : false
    },
    email: {
        type: String,
        required: true,
        error : "email attribute is required"
    },
    password: {
        type: String,
        required: true,
        error : "password attribute is required"
    },
    phonenumber: {
      type: String,
      required: false
    },
    plats: [ plat ],
    type:{
      type: String,
      required: true,
      default: 1
    },
    state:{
      type: Number,
      required: true
    }
},  { shardkey :{ email : 1} });

const ProfilBean = new Schema({
  firstname: {
    type: String,
    required: false,
  },
  lastname:{
    type: String,
    required: false,
  },
  email: {
      type: String,
      required: false
  },
  password: {
      type: String,
      required: false,
  },
  phonenumber: {
    type: String,
    required: false,
  },
  plats: [ plat ],
  type:{
    type: String,
    required: true
  }
});

ProfilSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        //do not reveal passwordHash
        delete returnedObject.password
    }
})

const Profil =  mongoose.model("profil", ProfilSchema);

module.exports = {
  Profil,
  ProfilSchema
};
