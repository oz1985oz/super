db.getCollection('users').insertMany([
{ name: "Boni", lastName: "Ginsburg", eMail: "bon@gmail.com", password: "boni123", city: "Tel-aviv", street: "Herzel 22", role: "manager" },
{ name: "Mor", lastName: "David", eMail: "mor@gmail.com", password: "mor123", city: "Ramat-Gan", street: "Yair 2", role: "manager" },
{ name: "Or", lastName: "Cohen", eMail: "or@gmail.com", password: "or123", city: "Holon", street: "Beer 12" },
{ name: "Gal", lastName: "Shosh", eMail: "gal@gmail.com", password: "gal123", city: "Tel-aviv", street: "Noga 24" }
])

db.getCollection('categories').insertMany([
{ name: "Dairy" },
{ name: "Vegetation" },
{ name: "Meat & Fish" },
{ name: "Drinks" }
])

db.getCollection('users').insertMany([
{ name: "Boni", lastName: "Ginsburg", eMail: "bon@gmail.com", password: "boni123", city:"Tel-aviv", street: "Herzel 22", role: "manager" },
{ name: "Mor", lastName: "David", eMail: "mor@gmail.com", password: "mor123", city:"Ramat-Gan", street: "Yair 2", role: "manager" },
{ name: "Or", lastName: "Cohen", eMail: "or@gmail.com", password: "or123", city:"Holon", street: "Beer 12" },
{ name: "Gal", lastName: "Shosh", eMail: "gal@gmail.com", password: "gal123", city:"Tel-aviv", street: "Noga 24" }
])

db.getCollection('products').insertMany([
{ name: "Milk", categoryId: ObjectId('5b8eb16efc989b8b7ecc13dd'), price: 6, imageUrl: "/assets/images/Milk.png" },
{ name: "Cheese", categoryId: ObjectId('5b8eb16efc989b8b7ecc13dd'), price: 10, imageUrl: "/assets/images/Cheese.png" },
{ name: "Banana", categoryId: ObjectId('5b8eb16efc989b8b7ecc13de'), price: 8, imageUrl: "/assets/images/Banana.png" },
{ name: "Tomato", categoryId: ObjectId('5b8eb16efc989b8b7ecc13de'), price: 4, imageUrl: "/assets/images/Tomato.png" },
{ name: "Lamb", categoryId: ObjectId('5b8eb16efc989b8b7ecc13df'), price: 45, imageUrl: "/assets/images/Lamb.png" },
{ name: "Lates niloticus", categoryId: ObjectId('5b8eb16efc989b8b7ecc13df'), price: 40, imageUrl: "/assets/images/Niloticus.png" },
{ name: "Coca-Cola", categoryId: ObjectId('5b8eb16efc989b8b7ecc13e0'), price: 7, imageUrl: "/assets/images/Coca-Cola.png" },
{ name: "Ice Tea", categoryId: ObjectId('5b8eb16efc989b8b7ecc13e0'), price: 10, imageUrl: "/assets/images/IceTea.png" }
])

db.getCollection('carts').insertMany([
{ customerId: ObjectId("5b8eab31fc989b8b7ecc13d9"), items: [{productId: ObjectId('5b8eb16efc989b8b7ecc13dd') , quantity: 2, totalPrice: 3 }, {productId: ObjectId('5b8eb16efc989b8b7ecc13df'), quantity: 4, totalPrice: 3 }], order: {finalPrice: 40, city: "Tel-aviv", street: "Herzel 22", shippingDate: "2018-03-27", orderDate: "2018-03-24", fourDigit: "0359" } },
{ customerId: ObjectId("5b8eab31fc989b8b7ecc13da"), items: [{productId: ObjectId('5b8eb16efc989b8b7ecc13de') , quantity: 1, totalPrice: 3 }, {productId: ObjectId('5b8eb16efc989b8b7ecc13e0'), quantity: 3, totalPrice: 3 }], order: {finalPrice: 7, city: "Ramat-Gan", street: "Yair 2", shippingDate: "2018-03-27", orderDate: "2018-03-25", fourDigit: "4476" } },
{ customerId: ObjectId("5b8eab31fc989b8b7ecc13db"), items: [{productId: ObjectId('5b8eb16efc989b8b7ecc13dd') , quantity: 3, totalPrice: 3 }, {productId: ObjectId('5b8eb16efc989b8b7ecc13e0'), quantity: 2, totalPrice: 3 }], order: {finalPrice: 6, city: "Holon", street: "Beer 12", shippingDate: "2018-04-06", orderDate: "2018-04-05", fourDigit: "0456" } },
{ customerId: ObjectId("5b8eab31fc989b8b7ecc13dc"), items: [{productId: ObjectId('5b8eb16efc989b8b7ecc13de') , quantity: 3, totalPrice: 3 }, {productId: ObjectId('5b8eb16efc989b8b7ecc13e0'), quantity: 2, totalPrice: 3 }], order: {finalPrice: 10, city: "Tel-aviv", street: "Noga 24", shippingDate: "2018-04-07", orderDate: "2018-04-05", fourDigit: "6778" } }
])