const router = require('express').Router()
const users = require('../controllers/users')
const authUsers = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')


router.route('/chefs')
  .get(users.index)

router.route('/chefs/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.destroy)

router.route('/chefs/:id/rating')
  .post(secureRoute, users.ratingCreate)

router.route('/chefs/:id/review')
  .post(secureRoute, users.reviewCreate)
// .put(users.update)
// .delete(secureRoute, users.destroy)

router.route('/profile')
  .get(secureRoute, authUsers.showProfile)

router.route('/chefs/:id/offersAccepted')
  .post(secureRoute, users.offersAccepted)

router.route('/chefs/:id/offersAccepted/:offereyid')
  .delete(secureRoute, users.offersAcceptDelete)

router.route('/chefs/:id/offersPending')
  .post(secureRoute, users.offersPendingCreate)

router.route('/chefs/:id/offersPending/:offereyid')
  .delete(secureRoute, users.offersPendingDelete)

<<<<<<< HEAD
router.route('/chefs/:id/offers')
=======
router.route('/offers')
>>>>>>> development
  .get(secureRoute, authUsers.offers)


<<<<<<< HEAD
// router.route('/chefs/:id/offersAccepted')
//   .post(users)
//   .delete(users)

router.route('/register')
  .post(authUsers.register)


router.route('/login')
  .post(authUsers.login)
=======
router.route('/register')
  .post(authUsers.register)

router.route('/login')
  .post(authUsers.login)

>>>>>>> development
// router.route('/message')
//   .post(authUsers.message)

module.exports = router