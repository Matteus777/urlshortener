

var mongoose = require('mongoose'),
User = mongoose.model('user');



  
exports.create_a_user = function(req, res) {
  var new_User = new User(req.body);
  User.findOne(req.body, function(err, result) {
    if (result){
      res.status(409).send({"Message":"User already exists"});
    }else{
      new_User.save(function(err, User) {
        if (err){
          res.send(err);
        }else{
          res.status(201).send(User);
        }
      });
    }
   
  
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


exports.delete_a_user = function(req, res) {
 
  User.deleteOne({"id":req.params.userId}, function(err, User) {

    if (User.deletedCount>0){
      res.json();
    }else{
      res.status(404).send({"Message: ":"User not found!"});
    }
    
  });
};
