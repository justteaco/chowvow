// /* global api, describe, it, expect, beforeEach, afterEach */
// const User = require('../../models/user')
// const jwt = require('jsonwebtoken') // again needed just like in create, we need to be able to pass tokens with requests.
// const { secret } = require('../../config/environment') // and our secret to encode that token with

// const testUserData = [{ 
//   name: 'offering',
//   email: 'offer@email',
//   password: 'pass',
//   passwordConfirmation: 'pass',
//   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
//   city: 'Manchester',
//   postcode: 'M1 1EZ'
// }, {
//   name: 'Jack',
//   email: 'jack@email',
//   password: 'pass',
//   passwordConfirmation: 'pass',
//   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
//   city: 'Manchester',
//   postcode: 'M1 1EZ'
// }]

// describe('Post to /chefs/:id/deleteOffersPending to delete an offer of colaboration', () => {
//   let token, incorrectToken, user

//   beforeEach(done => {
//     User.create(testUserData)
//       .then(users => {
//         token = jwt.sign({ sub: users[0]._id }, secret, { expiresIn: '6h' })
//         incorrectToken = jwt.sign({ sub: users[1]._id }, secret, { expiresIn: '6h' })
//         user = users
//         done()
//       })
//   })

//   afterEach(done => {
//     User.deleteMany()
//       .then(() => done())
//   })
// }

// it('should return a 401 with no token', done => {