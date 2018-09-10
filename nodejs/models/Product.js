var ObjectId = require('mongodb').ObjectId;

class Product {
	static getAll (db) {
		return db.collection('products').aggregate([
		    { "$lookup": {
				"from": "categories",
				"localField": "categoryId",
				"foreignField": "_id",
				"as": "category"
		    }}
		]).toArray()
	}	
	static getByCat (db, categoryId) {
		return db.collection('categories').aggregate([
			{ $match : {_id: new ObjectId(categoryId)} },
			{ "$lookup": {
				"from": "products",
				"localField": "_id",
				"foreignField": "categoryId",
				"as": "products"
			}}
		]).toArray()
	}
	static getOne (db, productId) {
		return db.collection('products').aggregate([
			{ $match : {_id: new ObjectId(productId)} },
			{ "$lookup": {
				"from": "categories",
				"localField": "categoryId",
				"foreignField": "_id",
				"as": "category"
		    }}
		]).toArray()
	}
	static add (db, newProduct) {
		// var newproduct = {
		// 	name: req.body.name, 
		// 	foods: req.body.foods, 
		// }
		db.collection('products').insert(newProduct);
	}
	static replace (db, productId, updatedProduct) {
		db.collection('products').updateOne(
			{_id: new ObjectId(productId)}, // search
			{$set: updatedproduct} // update
		);
	}
}

module.exports = Product