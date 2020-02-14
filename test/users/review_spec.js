/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')
const jwt = require('jsonwebtoken') 
const { secret } = require('../../config/environment')

describe('Test to post a review', () => {

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
    api.post(`/api/chefs/${user._id}/rating`)
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
    api.post(`/api/chefs/${user._id}/rating`)
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

  it('should return an object', done => {
    api.post(`/api/chefs/${user._id}/rating`)
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

  //need to check if the user has already left a review

})