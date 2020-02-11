const router = require('express').Router()
const users = require('../controllers/users')
const auth = require('../controllers/auth')
//const secureRoute = require('../lib/secureRoute')
console.log(auth.login)

router.route('/chefs')
  .get(users.index)

router.route('/chefs/:id')
  .get(users.show)
  
router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

// router.route('/user/:id')
//   .get(secureRoute, users.profile)


module.exports = router