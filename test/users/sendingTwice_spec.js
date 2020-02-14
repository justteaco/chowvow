/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')
const jwt = require('jsonwebtoken') // again needed just like in create, we need to be able to pass tokens with requests.
const { secret } = require('../../config/environment') // and our secret to encode that token with

const testUserData = { 
  name: 'offering',
  email: 'offer@email',
  password: 'pass',
  passwordConfirmation: 'pass',
  image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
  city: 'Manchester',
  postcode: 'M1 1EZ'
}

describe('Post a review on anothers profile', () => {
  let token, incorrectToken, user

  beforeEach(done => {
    User.create(testUserData)
      .then(users => {
        token = jwt.sign({ sub: users.id }, secret, { expiresIn: '6h' })
        user = users
        User.create(
          {
            name: 'Jack',
            email: 'jack@email',
            password: 'pass',
            passwordConfirmation: 'pass',
            image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
            city: 'Manchester',
            postcode: 'M1 1EZ',
            rating: [{
              _id: `${user._id}`,
              rating: '5',
              createdAt: '2020-02-14T12:27:20.529Z',
              updatedAt: '2020-02-14T12:27:20.529Z'
            }],
            // offersPending: [{
            //   _id: `${user[0]._id}`,
            //   review: 'amazing',
            //   createdAt: '2020-02-14T12:27:20.529Z',
            //   updatedAt: '2020-02-14T12:27:20.529Z'
            // }],
            // offersAccepted: [
            //   {
            //     _id: `${user[0]._id}`,
            //     review: 'amazing',
            //     createdAt: '2020-02-14T12:27:20.529Z',
            //     updatedAt: '2020-02-14T12:27:20.529Z'
            //   }
            //],
            review: [{
              _id: `${user._id}`,
              review: 'amazing',
              createdAt: '2020-02-14T12:27:20.529Z',
              updatedAt: '2020-02-14T12:27:20.529Z'
            }]
          }
        )
      })
      .then(() => done())
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => done())
  })

  it('should return a 401 if the user is trying to rate them twice', done => {
    api.post(`/api/chefs/${user._id}/rating`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 'rating': 2 })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })
})






// {
//   skills: [],
//   _id: '5e46922887cbf35acab54c40',
//   name: 'Jack',
//   email: 'jack@email',
//   image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
//   city: 'Manchester',
//   postcode: 'M1 1EZ',
//   rating: [],
//   offersPending: [],
//   offersAccepted: [],
//   review: [
//     {
//       _id: '5e46922887cbf35acab54c41',
//       review: 'amazing',
//       createdAt: '2020-02-14T12:27:20.529Z',
//       updatedAt: '2020-02-14T12:27:20.529Z'
//     }
//   ],
//   createdAt: '2020-02-14T12:27:20.500Z',
//   updatedAt: '2020-02-14T12:27:20.529Z',
//   __v: 1,
//   avgRating: 0,
//   id: '5e46922887cbf35acab54c40'
// }