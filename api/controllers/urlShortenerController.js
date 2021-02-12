'use strict';

var mongoose = require('mongoose'),
Url = mongoose.model('url');
User = mongoose.model('user');


exports.list_all_urls = function(req, res) {
  Url.find({}, function(err, Url) {
    if (err)
      res.send(err);
    res.json(Url);
  });
};

exports.create_a_url = function(req, res) {
  User.findOne({id: req.params.userId}, function(err, result) {
    if (result){
      var new_Url =new Url(req.body);
      new_Url.save(function(err, Url) {
        if (err){
          res.send(err);
        }else{
          res.status(201).send(Url);
        }
      });
    }else{
      res.status(404).send({"Message: ":"User not found!"});
    }
   
  
});
// User.findOneAndUpdate({id: req.params.userId}, { $push: { urls: req.body.url  } }, {new: true, useFindAndModify:false}, function(err, Url) {
//   if (err)
//     res.send(err);
//   res.json(Url);
// });
};

exports.redirect = function(req, res){
  Url.findOne({id:req.params.id},function(err,Url){
    res.status(301).redirect(Url.url);
  })
}
exports.read_a_url = function(req, res) {
  Url.findById(req.params.UrlId, function(err, Url) {
    if (err)
      res.send(err);
    res.json(Url);
  });
};


exports.update_a_url = function(req, res) {
  Url.findOneAndUpdate({_id: req.params.UrlId}, req.body, {new: true}, function(err, Url) {
    if (err)
      res.send(err);
    res.json(Url);
  });
};


exports.delete_a_url = function(req, res) {
  Url.remove({
    _id: req.params.UrlId
  }, function(err, Url) {
    if (err)
      res.send(err);
    res.json({ message: 'Url successfully deleted' });
  });
};
