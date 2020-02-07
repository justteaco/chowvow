const User = require('../../models/user')
const jst = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const testUserData = {
  username: 'test',
  email: 'test@email',
  image: 'image.jpg',
  skills: 'Asian',
  location: 'London',
  password: 'test',
  passwordConfirmation: 'test'
}

describe('GET /users', () => {
