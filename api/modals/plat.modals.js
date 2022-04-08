
  const mongoose = require("mongoose");
  const { Schema } = mongoose;

  const PlatSchema = new Schema({
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
    }
  });

  module.exports = PlatSchema;
