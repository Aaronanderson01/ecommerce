var app = require('./server');
var db = app.get('db');

var bcrypt = require('bcryptjs');

// HASH PASSWORD //
function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash;
}

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
  },
  updateProducts: function(req,res, next){
    var product = req.body;
          db.updateProducts([product.product_description, product.product_price, product.product_category_id, product.product_image, product.product_name], function(err, product) {
            console.log(err, product);
            res.send('successful');
    });
  },
	postAddress: function(req, res, next){
		db.getEmail(function(err, emails){
			res.send(emails);
		});
	},
  getProductById: function(req, res, next){
    db.getProductById([req.params.id],function(err, product){
      res.send(product);
    });
  },
  // REGISTER USER //
	register: function(req, res, next) {
		var user = req.body;

		// Hash the users password for security
		user.password = hashPassword(user.password);

		user.email = user.email.toLowerCase();

		db.user.user_create([user.name, user.email, user.password], function(err, user) {
			// If err, send err
			if (err) {
				console.log('Registration error: ', err);

				return res.status(500)
					.send(err);
			}

			// Send user back without password.
			delete user.password;
			res.status(200)
				.send(user);
		});
	},



	// // READ USER //
	// read: function(req, res, next) {
	// 	// List the column names that you want the search to grab
	// 	var searchOptions = {
	// 		columns: ['id', 'name', 'email']
	// 	};
	//
	// 	db.users.find(req.query, searchOptions, function(err, users) {
	// 		if (err) {
	// 			console.log('User read error: ', err);
	//
	// 			return res.status(401)
	// 				.send(err);
	// 		}
	//
	// 		res.status(200)
	// 			.json(users);
	// 	});
	// },

	// RETURN CURRENT USER //
	me: function(req, res, next) {
		// If user isnt on the session, then return error status
		if (!req.user) {
			console.log('Current user not found');

			return res.status(401)
				.send('current user not defined');
		}

		// Remove password for security
		var user = req.user;

		delete user.password;

		// Return user
		return res.status(200)
			.json(user);
	},

	update: function(req, res, next) {
		console.log('Starting update');

		var updateUser = req.body;
		updateUser.id = req.user.id;
		db.users.save(updateUser, function(err, user) {
			if (err) {
				console.log('User update error', err);

				return res.status(401)
					.send(err);
			}

			req.user = user;

			delete user.password;

			res.status(200)
				.json(user);
		});
	}
};
