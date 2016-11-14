var app = require('./server');
var db = app.get('db');
module.exports = {
  getProducts: function(req, res, next){

db.getProducts(function(err, products){
  console.log(err, products);
  res.send(products);
    });
  },
  postProducts: function(req, res, next){
    db.postProducts(function(err, products){
      console.log(err, products);
      res.send(products);
    });
  }
};
