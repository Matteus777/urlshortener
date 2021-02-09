'use strict';

var mongoose = require('mongoose'),
Url = mongoose.model('url');

exports.list_all_urls = function(req, res) {
  Url.find({}, function(err, Url) {
    if (err)
      res.send(err);
    res.json(Url);
  });
};




exports.create_a_url = function(req, res) {
  var new_Url = new Url(req.body);
  new_Url.save(function(err, Url) {
    if (err)
      res.send(err);
    res.json(Url);
  });
};


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