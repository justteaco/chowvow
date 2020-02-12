const User = require('../models/user')

// create index function that gets all cooks
function index(req, res) {
  User
    .find()
    .then(foundUsers => res.status(200).json(foundUsers))
    .catch(err => res.json(err))
}

// create show function that gets a cook by their id and returns their profile page 
function show(req, res) {
  User
    .findById(req.params.id)
    .populate('user')
    .then(selectedUser => res.status(200).json(selectedUser))
    .catch(err => res.json(err))
}

function ratingCreate(req, res) {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found' })
      user.rating.push(req.body)
      return user.save()
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
}

function offersPendingCreate(req, res) {
  console.log(req)
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found' })
      user.offersPending.push(req.body)
      return user.save()
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
}

function reviewCreate(req, res) {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found' })
      user.review.push(req.body)
      return user.save()
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
}

module.exports = { index, show, ratingCreate, offersPendingCreate, reviewCreate }


// create an update function that finds a cook by their id, updates it with the request body and re-saves (edit profile)
// create a remove function that finds a cook by their id and deletes it (delete profile)