
  const mongoose = require("mongoose");
  const { Schema } = mongoose;

  const PlatSchema = new Schema({
    id :{
      type : String,
      required: false
    },
    designation:{
      type: String,
      required: true
    },
    avatar:{
      type: String,
      required: false,
    },
    sellprice:{
      type: Number,
      required: true
    },
    buyprice:{
      type:Number,
      required: true
    },
    description:{
      type: String,
      required: false
    },
    status:{
      type: Boolean,
      required: true,
      default: true
    },
    parentresto:{
      type: String,
      required : false
    }
  });

  module.exports = PlatSchema;
