var express = require('express')
var router = express.Router();
var ProductCtrl = require('../controllers/ProductCtrl.js')

router.get('/products', ProductCtrl.getAll)
router.get('/prodsbycat/:categoryId', ProductCtrl.getByCat)

router.get('/products/:productId', ProductCtrl.getOne)

router.post('/products', ProductCtrl.add)
router.put('/products/:productId', ProductCtrl.replace)

module.exports = router;