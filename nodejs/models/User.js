var ObjectId = require('mongodb').ObjectId;

class User {
	static getAll (db) {
		return db.collection('users').find().toArray()
	}
	static getOne (db, userId) {
		return db.collection('users').findOne(
			{_id: new ObjectId(userId)}
		)
	}
	static login (db, userDetails) {
		console.log(userDetails)
		return db.collection('users').findOne(userDetails)
	}
	static add (db, newUser) {
		// var newUser = {
		// 	name: req.body.name, 
		// 	foods: req.body.foods, 
		// }
		db.collection('users').insert(newUser);
	}
	static replace (db, userId, updatedUser) {
		db.collection('users').updateOne(
			{_id: new ObjectId(userId)}, // search
			{$set: updatedUser} // update
		)
	}
}

module.exports = User