const router = require('express').Router()
const users = require('../controllers/users')
const authUsers = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/chefs')
  .get(users.index)

router.route('/chefs/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.destroy)

router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/chefs/:id/review')
  .post(users.reviewCreate)
  // .put(users.update)
  // .delete(secureRoute, users.destroy)

router.route('/profile')
  .get(authUsers.showProfile)

router.route('/chefs/:id/offersPending')
  .post(secureRoute, users.offersPendingCreate)
  .delete(secureRoute, users.offersPendingDelete)
  
router.route('/chefs/:id/offers')
  .get(secureRoute, authUsers.offers)

// router.route('/chefs/:id/offersAccepted')
//   .post(users.)
//   .delete(users.)

router.route('/register')
  .post(authUsers.register)

router.route('/login')
  .post(authUsers.login)

module.exports = router