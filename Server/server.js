
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var jwt = require('jsonwebtoken');

var cookieParser = require('cookie-parser');
var customers = {};

var port = 3000;
var connectionString =
"postgres://localhost/HiveHouse";
var massiveInstance = massive.connectSync({connectionString : connectionString});
var app = module.exports = express();
app.set('db', massiveInstance);
var passport = require('./Services/passport');
var controller =require('./controller');
var db = app.get('db');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors());
app.use(express.static(__dirname + "./.."));


var secret = {
  secret: 'asdfloierniougdkjhbnjklhgdfsdfgjkuer'
};
app.use(session(secret));

app.post('/api/products', controller.postProducts);
app.post('/api/addressList', controller.postAddress);
app.get('/api/products', controller.getProducts);
app.put('/api/products', controller.updateProducts);
app.get('/api/products/:id', controller.getProductById);

app.listen(port, function(){
  console.log('listening on port' +' '+ port );
});
