const mongoose = require('mongoose') // needed to create a new schema and model
// const bcrypt = require('bcrypt') // our library used to hash our users passwords

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  skills: { type: String, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)