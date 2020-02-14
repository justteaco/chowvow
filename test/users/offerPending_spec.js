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

describe('Post to /chefs/:id/offersPending to create an offer of colaboration', () => {
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

  it('should return a 201', done => {
    api.post(`/api/chefs/${user[1]._id}/offersPending`)
      .set('Authorization', `Bearer ${token}`)
      .send(null)
      .end((err, res) => {
        expect(res.status).to.eq(201)
        done()
      })
  })

  it('should return a 401 if the user is trying to give himself an offer', done => {
    api.post(`/api/chefs/${user[0]._id}/offersPending`)
      .set('Authorization', `Bearer ${token}`)
      .send(null)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 401 if user is not logged in', done => {
    api.post(`/api/chefs/${user[1]._id}/offersPending`)
      .send(null)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return an object', done => {
    api.post(`/api/chefs/${user[1]._id}/offersPending`)
      .set('Authorization', `Bearer ${token}`)
      .send(null)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.post(`/api/chefs/${user[1]._id}/offersPending`)
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

  it('should return the correct types', done => {
    api.post(`/api/chefs/${user[1]._id}/offersPending`)
      .set('Authorization', `Bearer ${token}`)
      .send({ 'rating': 2 })
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

  it('should increase the offerPending by one', done => {
    api.post(`/api/chefs/${user[1]._id}/offersPending`)
      .set('Authorization', `Bearer ${token}`)
      .send(null)
      .end((err, res) => {
        const offer = user[1].offersPending
        expect(res.body.offersPending.length).to.eq(offer.length + 1)
        done()
      })
  })

  // has the user already sent an offer
  // go through the persons offerspending array
  // find an id that matches the offererys


})

// const chefId = this.props.match.params.id
// try {
//   const res = await axios.get(`/api/chefs/${chefId}`, {
//     headers: { Authorization: `Bearer ${Auth.getToken()}` }
//   })
//   const isPending = res.data.offersPending.find(offer => offer.offeringUser === Auth.getUser())
//   if (isPending) {
//     this.setState({ pending: true })
//   }


