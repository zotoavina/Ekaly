const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfilSchema = new Schema({
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
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phonenumber: {
      type: String,
      required: false,
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

module.exports = Profil;
