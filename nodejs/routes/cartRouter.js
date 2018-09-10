var express = require('express')
var router = express.Router();
var CartCtrl = require('../controllers/CartCtrl.js')

router.get('/carts', CartCtrl.getAll)

router.get('/cart/:cartId', CartCtrl.getOne)

router.post('/cart', CartCtrl.add)
router.put('/cart/:cartId', CartCtrl.replace)

module.exports = router;