/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')
const jwt = require('jsonwebtoken') 
const { secret } = require('../../config/environment')

describe('Test to show an individual user', () => {

  let user, token

  beforeEach(done => {
    User.create({
      name: 'Jack',
      email: 'jack@email',
      password: 'pass',
      passwordConfirmation: 'pass',
      image: 'https://res.cloudinary.com/dqrkw1z1a/image/upload/v1581364940/Chow%20Vow/james6_qxaho1.jpg',
      city: 'Manchester',
      postcode: 'M1 1EZ'
    })
      .then(createdUser => {
        user = createdUser
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
        done()
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => done())
  })

  it('should return a 404 not found for an invalid chefs id', done => {
    api.get('/api/chefs/1234')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return a 200 response', done => {
    api.get(`/api/chefs/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an object', done => {
    api.get(`/api/chefs/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return an array of objects with the correct fields', done => {
    api.get(`/api/chefs/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
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
    api.get(`/api/chefs/${user._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        const user = res.body
        expect(user._id).to.be.a('string')
        expect(user.name).to.be.a('string')
        expect(user.email).to.be.a('string')
        expect(user.skills).to.be.an('array')
        expect(user.city).to.be.a('string')
        expect(user.image).to.be.a('string')
        expect(user.postcode).to.be.an('string')
        expect(user.rating).to.be.an('array')
        expect(user.offersPending).to.be.an('array')
        expect(user.offersAccepted).to.be.an('array')
        expect(user.review).to.be.an('array')
        expect(user.avgRating).to.be.an('number')
        done()
      })
  })
})