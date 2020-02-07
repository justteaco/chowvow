const router = require('express').Router()
const users = require('../controllers/..........')
//need to bring in secure route

router.route('/chefs')
  .get(users.index)

router.route('/register')
  .post(users.register)

router.route('/login') 
  .post(users.login)

router.route('/profile')
  .get(users.profile)

module.exports = router