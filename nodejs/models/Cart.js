var ObjectId = require('mongodb').ObjectId;

class Cart {
	static getAll (db) {
		return db.collection('carts').aggregate([
			{ "$lookup": {
				"from": "users",
				"localField": "customerId",
				"foreignField": "_id",
				"as": "user"
		    }},
		    { "$lookup": {
				"from": "products",
				"localField": "items.productId",
				"foreignField": "_id",
				"as": "products"
		    }}
		]).toArray()
	}
	static getOne (db, cartId) {
		return db.collection('carts').aggregate([
			{ $match : {_id: new ObjectId(cartId)} },
			{ "$lookup": {
				"from": "users",
				"localField": "customerId",
				"foreignField": "_id",
				"as": "user"
		    }},
		    { "$lookup": {
				"from": "products",
				"localField": "items.productId",
				"foreignField": "_id",
				"as": "products"
		    }},
		]).toArray()
	}
	static add (db, newCart) {
		// var newCart = {
		// 	name: req.body.name, 
		// 	foods: req.body.foods, 
		// }

		db.collection('carts').insert(newCart);
	}
	static replace (db, cartId, updatedCart) {
		db.collection('carts').updateOne(
			{_id: new ObjectId(cartId)}, // search
			{$set: updatedCart} // update
		);
	}
}

module.exports = Cart