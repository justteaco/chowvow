const router = require('express').Router()
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')
const authUsers = require('../controllers/auth')

router.route('/chefs')
  .get(users.index)


router.route('/chefs/:id')
  .get(users.show)
  .put(users.update)
  .delete(secureRoute, users.destroy)

router.route('/chefs/:id/rating')
  .post(users.ratingCreate)

router.route('/chefs/:id/offersPending')
  .post(users.offersPendingCreate)

router.route('/register')
  .post(authUsers.register)

router.route('/login')
  .post(authUsers.login)


module.exports = router