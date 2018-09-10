var express = require('express');
var session = require('express-session');
var cors = require('cors');
var mongodb = require('mongodb');
var MongoUser = mongodb.MongoClient;
var bodyParser = require('body-parser');
var cors = require('cors');
var usersRouter = require('./routes/usersRouter');
var productsRouter = require('./routes/productsRouter');
var cartRouter = require('./routes/cartRouter');

var connectionPromise = MongoUser.connect('mongodb://localhost:27017', { useNewUrlParser: true }); // it's a promise
var db;

var app = express();
app.use(cors());
app.use(session({
  name: 'user',
  secret: 'my express secret',
  saveUninitialized: true,
  resave: false,
  cookie: { maxAge: 360000 }
}));

app.use(bodyParser.json());
app.use(usersRouter);
app.use(productsRouter);
app.use(cartRouter);

app.get('/', (req, res) => {
	res.redirect('/users')
})

connectionPromise.then(connection => {
	db = connection.db('super')	
	app.set('db', db)		
	app.listen('3000', () => {
		console.log('listen')
	})
}).catch(err => console.error(err));