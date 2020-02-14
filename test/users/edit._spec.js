/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')
const jwt = require('jsonwebtoken') 
const { secret } = require('../../config/environment')

const testUserData = [{
  name: 'Jack',
  email: 'jack@email',
  password: 'pass',
  passwordConfirmation: 'pass',
  image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
  city: 'Manchester',
  postcode: 'M1 1EZ'
}, {
  name: 'test',
  email: 'test@email',
  password: 'pass',
  passwordConfirmation: 'pass',
  image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
  city: 'Manchester',
  postcode: 'M1 1EZ'
}]

describe('Test editing user profile', () => {
  let token, user, incorrectToken

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

  it('should return a 401 if not their id is incorrect', done => {
    api.put('/api/chefs/1234')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'jack' })
      .end((err, res) => {
        expect(res.status).to.eq(401)
      })
    done()
  })

  it('should return a 202 response with a token', done => {
    api.put(`/api/chefs/${user[0]._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'jack' })
      .end((err, res) => {
        expect(res.status).to.eq(202)
        done()
      })
  })

  it('should return an array of objects with the correct fields', done => {
    api.put(`/api/chefs/${user[0]._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'jack' })
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          '_id',
          'name',
          'email',
          'skills',
          'city',
          'image',
          'postcode',
          'rating',
          'offersPending',
          'offersAccepted',
          'review',
          'createdAt',
          'updatedAt',
          '__v',
          'avgRating',
          'id'
        ])
        done()
      })
  })

  it('should return an array of objects with the correct fields and types of values', done => {
    api.put(`/api/chefs/${user[0]._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body._id).to.be.a('string')
        expect(res.body.name).to.be.a('string')
        expect(res.body.email).to.be.a('string')
        expect(res.body.skills).to.be.an('array')
        expect(res.body.city).to.be.a('string')
        expect(res.body.image).to.be.a('string')
        expect(res.body.postcode).to.be.an('string')
        expect(res.body.rating).to.be.an('array')
        expect(res.body.offersPending).to.be.an('array')
        expect(res.body.offersAccepted).to.be.an('array')
        expect(res.body.review).to.be.an('array')
        expect(res.body.avgRating).to.be.an('number')
        done()
      })
  })


  it('should return a 401 response with a token for a user that did not register', done => {
    api.put(`/api/chefs/${user[0]._id}`)
      .set('Authorization', `Bearer ${incorrectToken}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

})