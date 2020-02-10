/* global api, describe, it, expect, beforeEach, afterEach */
const User = require('../../models/user')

const loginDataCorrect = { // so we can test correct responses
  email: 'test@test.test',
  password: 'test'
}

const loginDataIncorrect = { // so we can test our incorrect responses
  email: 'test@test.test',
  password: 'wrong'
}

describe('Test to check whether authorization is approved or not / login', () => {
  beforeEach(done => { // making a user before each test, this is the user we are going to test 'logging in'
    User.create({
      name: 'test',
      email: 'test@test.test', // the login data objects above are based on this user
      image: 'image.jpg',
      skills: 'indian',
      city: 'london',
      postcode: 'br20hg',
      password: 'test',
      passwordConfirmation: 'test'
    })
      .then(() => done())
  })

  afterEach(done => { // making sure that user is removed after each test finishes
    User.deleteMany().then(() => done())
  })

  it('should return a 401 unauthorised response for incorrect login details', done => { // testing to make sure it does not log in with incorrect details
    api.post('/api/login')
      .send(loginDataIncorrect)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 202 accepted response for correct login details', done => { // testing response for correct details
    api.post('/api/login')
      .send(loginDataCorrect)
      .end((err, res) => {
        expect(res.status).to.eq(202)
        done()
      })
  })

})