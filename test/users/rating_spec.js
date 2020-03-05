/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')
const jwt = require('jsonwebtoken') 
const { secret } = require('../../config/environment')

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

describe('Post a rating on anothers profile', () => {
  let token, user

  beforeEach(done => {
    User.create(testUserData)
      .then(users => {
        token = jwt.sign({ sub: users[0]._id }, secret, { expiresIn: '6h' })
        user = users
        done()
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => done())
  })

  it('should return a 404 not found for an invalid chefs id', done => {
    api.post('/api/chefs/1234/rating')
      .set('Authorization', `Bearer ${token}`)
      .send({ 'rating': 2 })
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return a 401 with no token', done => {
    api.post(`/api/chefs/${user[0]._id}/rating`)
      .send({ 'rating': 2 })
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 201 with a token', done => {
    api.post(`/api/chefs/${user[1]._id}/rating`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 'rating': 2 })
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })

  it('should return a 401 if the user is trying to rate themself', done => {
    api.post(`/api/chefs/${user[0]._id}/rating`)
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
    api.post(`/api/chefs/${user[1]._id}/rating`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 'rating': 2 })
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.post(`/api/chefs/${user[1]._id}/rating`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 'rating': 2 })
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

  it('should return the correct fields', done => {
    api.post(`/api/chefs/${user[1]._id}/rating`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 'rating': 2 })
      .end((err, res) => {
        const user = res.body
        const rating = res.body.rating
        expect(user._id).to.be.a('string')
        expect(user.name).to.be.a('string')
        expect(user.email).to.be.a('string')
        expect(user.skills).to.be.an('array')
        expect(user.city).to.be.a('string')
        expect(user.image).to.be.a('string')
        expect(user.postcode).to.be.an('string')
        expect(user.rating).to.be.an('array')
        expect(rating[0].rating).to.be.a('number')
        expect(rating[0]._id).to.be.a('string')
        expect(user.offersPending).to.be.an('array')
        expect(user.offersAccepted).to.be.an('array')
        expect(user.review).to.be.an('array')
        expect(user.avgRating).to.be.a('string')
        done()
      })
  })

  it('should increase the rating by one', done => {
    api.post(`/api/chefs/${user[1]._id}/rating`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 'rating': 2 })
      .end((err, res) => {
        const rating = user[1].rating
        expect(res.body.rating.length).to.eq(rating.length + 1)
        done()
      })
  })

  //need to check if the user has already left a review
    
})