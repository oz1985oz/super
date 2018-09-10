var User = require('../models/User.js')

class UserCtrl {
	static getAll (req, res) {
		var db = req.app.get('db')
		User.getAll(db)
		.then(data => {
			res.json(data)
		})
	}
	static getOne (req, res) {
		var db = req.app.get('db')
		User.getOne(db, req.params.userId)
		.then(data => {
			res.json(data)
		})
	}
	static login (req, res) {
		var db = req.app.get('db')
		User.login(db, req.body)
		.then(data => {
			if (data) {
				req.session.user = data._id;
				console.log(data._id)
				res.json(data._id)
				console.log('Hello ' + data.name)
			} else {
				console.log('invalid username or password')
				res.send(401)
			}
		})
	}
	static checkLogin (req, res) {
		if (req.session.user) {
			var db = req.app.get('db')
			User.getOne(db, req.session.user)
			.then(data => {
				res.json(data)
			})
		} else {
			console.log(req.session.user)
			console.log('Not connected, try to login')
			res.send(401)
		}
	}
	static add (req, res) {
		var db = req.app.get('db')
		User.add(db, req.body);
		res.send(201);
	}
	static replace (req, res) {
		var db = req.app.get('db')
		User.replace(db, req.params.userId, req.body);
		res.send(204);
	}
}

module.exports = UserCtrl