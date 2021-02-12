'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique:true
  },
  urls:[{
    type:Number,
    unique:true
  }],
},{
  versionKey: false,
},);

userSchema.set('toJSON', {
  transform: function(doc, ret) {
      delete ret._id;
      delete ret.urls;
  }
});
module.exports = mongoose.model('user', userSchema);