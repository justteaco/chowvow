const User = require('../models/user')

// create index function that gets all cooks
function index(req, res) {
  console.log('working')
  User
    .find()
    .populate('user')
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

function update(req, res, next) {
  console.log(req.currentUser)
  User
    .findById(req.params.id)
    .then(user => {
      console.log(user)
      if (!user) throw new Error('Not Found')
      if (!user._id.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorised' })
      Object.assign(user, req.body) 
      return user.save()  
    })
    .then(updatedUser => res.status(202).json(updatedUser)) 
    .catch(next)
}

// function destroy(req, res) {
//   User
//     .findById(req.params.id)
//     .then(user => {
//       if (!user) return res.status(404).json({ message: 'Not Found ' })
//       if (!user.user.equals(req.currentUser._id)) {
//         res.status(401).json({ message: 'Unauthorised' })
//       } else {
//         user.remove().then(() => res.sendStatus(204))
//       }
//     })
//     .catch(err => res.json(err))
// }

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
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found' })
      user.offersPending.push({ offeringUser: req.currentUser })
      return user.save()
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.json(err))
}

function offersPendingDelete(req, res) {
  User
    .findById(req.currentUser)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found' })
      const offerToDelete = user.offersPending.find(offer => offer._id === req.params.id)
      console.log(offerToDelete)
      offerToDelete.remove()
      return user.save()
    })
    .then(() => res.sendStatus(204)) 
    
    .catch(err => res.status(401).json(err)) //send any errors
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

module.exports = { index, show, update, ratingCreate, offersPendingCreate, reviewCreate, offersPendingDelete }

// .then(user => {
//   if (!user) return res.status(404).json({ message: 'Not Found' })
//   console.log(user.offersPending.id)
//   const offer = user.offersPending.id(req.params.commentId)
//   offer.remove() 
//   
// }
// )
// create an update function that finds a cook by their id, updates it with the request body and re-saves (edit profile)
// create a remove function that finds a cook by their id and deletes it (delete profile)

//the offerId is the ID of the offer that we are trying to reject (it's stored as a param on the request) 
//check if my offers include the one we are trying to delete
// if (user.offersPending.some(offer => offer._id.equals(req.params.offerId))) {
        
//   //if so, then pick out the offer..
//   const offer = user.offersPending.filter(offer => offer._id.equals(req.params.offerId))[0]

//   //..and delete it
//   offer.remove()
// }
// return user.save()