/* global api, describe, it, expect */

describe('Test a Get request to index other users', () => {

  it('should return a 200 response if the user is able to index and show other users', done => {
    api.get('/api/chefs')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', done => {
    api.get('/api/chefs')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should return an array of objects', done => {
    api.get('/api/chefs')
      .end((err, res) => {
        res.body.forEach(user => {
          expect(user).to.be.an('object')
        })
        done()
      })
  })

  it('should return an array of objects with the correct fields', done => {
    api.get('/api/chefs')
      .end((err, res) => {
        res.body.forEach(user => {
          expect(user).to.contains.keys([
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
        })
        done()
      })
  })

  it('should return an array of objects with the correct fields and types of values', done => {
    api.get('/api/chefs')
      .end((err, res) => {
        res.body.forEach(user => {
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
          expect(user.avgRating).to.be.a('number')
        })
        done()
      })
  })
})
