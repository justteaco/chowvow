const router = require('express').Router()
const users = require('../controllers/users')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/chefs')
  .get(users.index)

router.route('/chefs/:id')
  .get(users.show)
  
router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/chefs/:id/offersPending')
  .post(secureRoute, users.offersPendingCreate)
  .delete(secureRoute, users.offersPendingDelete)
  
router.route('/chefs/:id/offers')
  .get(secureRoute, auth.offers)

// router.route('/chefs/:id/offersAccepted')
//   .post(users.)
//   .delete(users.)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

// router.route('/user/:id')
//   .get(secureRoute, users.profile)


module.exports = router