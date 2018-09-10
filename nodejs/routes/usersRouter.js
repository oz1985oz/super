var express = require('express')
var router = express.Router();
var UserCtrl = require('../controllers/UserCtrl.js')

router.get('/users', UserCtrl.getAll)

router.get('/users/:userId', UserCtrl.getOne)
router.put('/users/:userId', UserCtrl.replace)

router.get('/dashboard', UserCtrl.checkLogin)
router.post('/signin', UserCtrl.login)
router.post('/signup', UserCtrl.add)

module.exports = router;