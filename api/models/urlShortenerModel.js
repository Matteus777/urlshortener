'use strict';
var mongoose = require('mongoose');
var shortid = require('shortid')
var Schema = mongoose.Schema;


var urlSchema = new Schema({
  _id:{
    type:String,
    default:shortid.generate()
  },
  url: {
    type:String
  },
  hits: {
      type: Number,
      default: 0
  }
},{
  versionKey: false
});
urlSchema.virtual('id').get(function(){
  return this._id;
});

urlSchema.virtual('shortUrl').get(function(){
  return 'localhost:3000/'+this.id;
})

urlSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    delete ret._id;

    
}
});
module.exports = mongoose.model('url', urlSchema);