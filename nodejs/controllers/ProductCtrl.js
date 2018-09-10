var Product = require('../models/Product.js')
class ProductCtrl {
	static getAll (req, res) {
		var db = req.app.get('db')
		Product.getAll(db)
		.then(data => {
			res.json(data)
		})
	}	
	static getByCat (req, res) {
		var db = req.app.get('db')
		Product.getByCat(db, req.params.categoryId)
		.then(data => {
			res.json(data)
		})
	}
	static getOne (req, res) {
		var db = req.app.get('db')
		Product.getOne(db, req.params.productId)
		.then(data => {
			res.json(data)
		})
	}
	static add (req, res) {
		var db = req.app.get('db')
		Product.add(db, req.body);
		res.send(201);
	}
	static replace (req, res) {
		var db = req.app.get('db')
		Product.replace(db, req.params.productId, req.body);
		res.send(204);
	}
}

module.exports = ProductCtrl
