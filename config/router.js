const router = require('express').Router()
const users = require('../controllers/users')
const authUsers = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/chefs')
  .get(users.index)

router.route('/chefs/:id')
  .get(users.show)
  .put(secureRoute, users.update)

router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/chefs/:id/review')
  .post(users.reviewCreate)
<<<<<<< HEAD

// .delete(secureRoute, users.destroy)
=======
  // .put(users.update)
  // .delete(secureRoute, users.destroy)
>>>>>>> 153b58c72dacf2a251c5e957f61584b8f79a11f5

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

router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/register')
  .post(authUsers.register)

router.route('/login')
  .post(authUsers.login)


module.exports = router