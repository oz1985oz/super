var Cart = require('../models/Cart.js')
class CartCtrl {
	static getAll (req, res) {
		var db = req.app.get('db')
		Cart.getAll(db)
		.then(data => {
			res.json(data)
		})
	}
	static getOne (req, res) {
		var db = req.app.get('db')
		Cart.getOne(db, req.params.cartId)
		.then(data => {
			res.json(data)
		})
	}
	static add (req, res) {
		var db = req.app.get('db')
		Cart.add(db, req.body);
		res.send(201);
	}
	static replace (req, res) {
		var db = req.app.get('db')
		Cart.replace(db, req.params.cartId, req.body);
		res.send(204);
	}
}

module.exports = CartCtrl