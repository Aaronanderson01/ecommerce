var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var jwt = require('jsonwebtoken');
var etsyjs = require('etsy-js');
var url = require('url');

var cookieParser = require('cookie-parser');

var customers = {};

var port = 3000;
var connectionString =
    "postgres://localhost/HiveHouse";
var massiveInstance = massive.connectSync({
    connectionString: connectionString
});
var app = module.exports = express();
app.set('db', massiveInstance);
var passport = require('./Services/passport');
var controller = require('./controller');
var etsyController = require('./etsyController');
var db = app.get('db');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors());
app.use(express.static(__dirname + "./.."));

var client = etsyjs.client({
    key: 'vcox5goi3h1dqhqekx6bnaur',
    secret: '314yixo872',
    callbackURL: 'http://localhost:3000/api/shop/authorize'
});


var secret = {
    secret: 'asdfloierniougdkjhbnjklhgdfsdfgjkuer'
};
app.use(session(secret));
app.post('/api/products', controller.postProducts);
app.post('/api/addressList', controller.postAddress);
app.get('/api/products', controller.getProducts);
app.put('/api/products', controller.updateProducts);
app.get('/api/products/:id', controller.getProductById);
app.get('/api/shop', etsyController.getShop);
app.get('/api/shop/products',etsyController.getShopProducts);

app.get('/api/shop/start', function(req, res) {
    return client.requestToken(function(err, response) {
        if (err) {
            return console.log(err);
        }
        req.session.token = response.token;
        req.session.sec = response.tokenSecret;
        console.log('response: ', response);
        return res.redirect(response.loginUrl);
    });
});

app.get('/api/shop/authorize', function(req, res) {
    var query, verifier;
    console.log('req url', req.url);
    query = url.parse(req.url, true).query;
    verifier = query.oauth_verifier;
    //console.log('verifier', verifier);
    return client.accessToken(req.session.token, req.session.sec, verifier, function(err, response) {
        req.session.token = response.token;
        req.session.sec = response.tokenSecret;
        console.log('token', response.token);
        return res.redirect('/find');
    });
});

app.get('/find', function(req, res) {
    return client.auth(req.session.token, req.session.sec).user("etsyjs").find(function(err, body, headers) {
        console.log(req.session);
        if (err) {
            console.log(err);
        }
        if (body) {
            console.dir(body);
        }
        if (body) {
            return res.send(body.results[0]);
        }
    });
});

app.listen(port, function() {
    console.log('listening on port' + ' ' + port);
});

//consumer key = 447ff0a20a8f85c1335a09b02192a5

// consumer secret = 49ad6ab21e
