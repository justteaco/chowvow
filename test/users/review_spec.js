/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')
const jwt = require('jsonwebtoken') // again needed just like in create, we need to be able to pass tokens with requests.
const { secret } = require('../../config/environment') // and our secret to encode that token with

const testUserData = [{ 
  name: 'offering',
  email: 'offer@email',
  password: 'pass',
  passwordConfirmation: 'pass',
  image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
  city: 'Manchester',
  postcode: 'M1 1EZ'
}, {
  name: 'Jack',
  email: 'jack@email',
  password: 'pass',
  passwordConfirmation: 'pass',
  image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
  city: 'Manchester',
  postcode: 'M1 1EZ'
}]

describe('Post a review on anothers profile', () => {
  let token, incorrectToken, user

  beforeEach(done => {
    User.create(testUserData)
      .then(users => {
        token = jwt.sign({ sub: users[0]._id }, secret, { expiresIn: '6h' })
        incorrectToken = jwt.sign({ sub: users[1]._id }, secret, { expiresIn: '6h' })
        user = users
        done()
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => done())
  })

  it('should return a 404 not found for an invalid chefs id', done => {
    api.post('/api/chefs/1234/review')
      .set('Authorization', `Bearer ${token}`)
      .send({ 
        user,
        'review': 'amazing',
        'rating': '5'
      })
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return a 401 with no token', done => {
    api.post(`/api/chefs/${user[1]._id}/review`)
      .send({ 
        user,
        'review': 'amazing',
        'rating': '5'
      })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 201 with a token', done => {
    api.post(`/api/chefs/${user[1]._id}/review`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 
        user,
        'review': 'amazing',
        'rating': '5'
      })
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })

  it('should return a 401 if the user is trying to review themself', done => {
    api.post(`/api/chefs/${user[0]._id}/review`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 
        user,
        'review': 'amazing',
        'rating': '5'
      })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return an object', done => {
    api.post(`/api/chefs/${user[1]._id}/review`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 
        user,
        'review': 'amazing',
        'rating': '5'
      })
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should increase the reviews by 1', done => {
    api.post(`/api/chefs/${user[1]._id}/review`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 
        user,
        'review': 'amazing',
        'rating': '5'
      })
      .end((err, res) => {
        const rating = user[1].review
        expect(res.body.review.length).to.eq(rating.length + 1)
        done()
      })
  })

})

