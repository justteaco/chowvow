/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')
const jwt = require('jsonwebtoken') 
const { secret } = require('../../config/environment')

describe('Test to get ones own profile infor', () => {

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

  it('should return a 401 with no token', done => {
    api.get('/api/profile')
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 200 with token', done => {
    api.get('/api/profile')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return a 200 with token', done => {
    api.get('/api/profile')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an object', done => {
    api.get('/api/profile')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return an array of objects with the correct fields', done => {
    api.get('/api/profile')
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


})