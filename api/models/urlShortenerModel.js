'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var urlSchema = new Schema({
  id: {
    type: String,
    required: true
  },
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
});

module.exports = mongoose.model('url', urlSchema);