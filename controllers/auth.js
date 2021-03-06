const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json({ 'message': `Thanks for registering ${user.name}` }))
    .catch(err => res.status(422).json(err))
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24h' })
      res.status(202).json({
        message: `Welcome back ${user.name}`,
        token
      })
    })
    .catch(err => res.json(err))
}

function showProfile(req, res) {
  User
    .findById(req.currentUser._id)
    .populate('user')
    .then(selectedUser => res.status(200).json(selectedUser))
    .catch(err => res.json(err))
}

// function message(req, res) {
//   User
//     .findById(req.params.id)
//     .then(user => {
//       if (!user) return res.status(404).json({ message: 'Not Found' })
//       user.review.push(req.body)
//       return user.save()
//     })
//     .then(user => res.status(201).json(user))
//     .catch(err => res.json(err))
// }

function offers(req, res) {
  User
    .findById(req.currentUser._id)
    .populate('offeringUser')
    .populate('acceptedUser')
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

module.exports = { register, login, showProfile, offers }
