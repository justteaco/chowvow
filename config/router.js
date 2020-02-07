const router = require('express').Router()
const users = require('../controllers/users')
const auth = require('../controllers/auth')
//need to bring in secure route

router.route('/chefs')
  .get(users.index)

router.route('/register')
  .post(auth.register)

router.route('/login') 
  .post(auth.login)

// router.route('/profile')
//   .get(users.profile)

module.exports = router