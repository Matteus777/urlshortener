'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var urlSchema = new Schema({
  userId: {
    type: String,
  },
  url: {
    type: [{
      type: String,
    }],
  },
  shortUrl: {
    type: [{
      type: String, 
    }],
   
  },
  hits: {
    type: [{
      type: Number,
    }],
  }
},{
  versionKey: false
});

module.exports = mongoose.model('url', urlSchema);