const router = require('express').Router()
const users = require('../controllers/users')
const authUsers = require('../controllers/auth')
// const secureRoute = require('../lib/secureRoute')

router.route('/chefs')
  .get(users.index)


router.route('/chefs/:id')
  .get(users.show)
<<<<<<< HEAD
=======
  
router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/chefs/:id/review')
  .post(users.reviewCreate)
>>>>>>> 4de55e938bb2e0348e40abc82cce0ededea8d872
  // .put(users.update)
  // .delete(secureRoute, users.destroy)

router.route('/chefs/:id/offersPending')
  .post(users.offersPendingCreate)

router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/register')
  .post(authUsers.register)

router.route('/login')
  .post(authUsers.login)


module.exports = router