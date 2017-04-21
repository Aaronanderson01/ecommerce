var app = require('./server');
var etsyjs = require('etsy-js');
var client = etsyjs.client({
  key:'vcox5goi3h1dqhqekx6bnaur',
  secret:'314yixo872',
  callbackURL: 'http:localhost:3000/shop/authorize'
});

module.exports = {

    // getShop: function(req, res, next) {
    //
    //   // Etsy js call
    //   client.get('/users/68552465/shops', {}, function (err, status, body, headers) {
    //     console.log(body);
    //       //Return to service
    //       res.status(200).send(body);
    //     });
    //   }
    //
    // };

    getShop: function(req, res, next) {

      // Etsy js call
      client.auth('447ff0a20a8f85c1335a09b02192a5', '49ad6ab21e').get('/shops/11315253', {}, function (err, status, body, headers) {
        console.log(body);
          //Return to service
          res.status(200).send(body);
        });
      },
      getShopProducts: function(req, res, next) {
        client.auth('447ff0a20a8f85c1335a09b02192a5', '49ad6ab21e').get('/shops/11315253/listings/active', {
          includes: 'MainImage'
        }, function (err, status, body, headers) {
          console.log(body);
            //Return to service
            res.status(200).send(body);
          });

      }

    };
