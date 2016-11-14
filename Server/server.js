
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var InstagramStrategy = require('passport-instagram').Strategy;
var localStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var customers = {};

var port = 3000;
var connectionString =
"postgres://localhost/HiveHouse";
var massiveInstance = massive.connectSync({connectionString : connectionString});
var app = module.exports = express();
app.set('db', massiveInstance);
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
// 
// passport.use(new InstagramStrategy({
//     clientID: '6586e550ffe6442ba82160208210f389',
//     clientSecret: INSTAGRAM_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ instagramId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));
app.post('/api/products', controller.postProducts);
app.get('/api/products', controller.getProducts);

app.listen(port, function(){
  console.log('listening on port' +' '+ port );
});
