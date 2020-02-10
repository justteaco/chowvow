const mongoose = require('mongoose') // This is needed to create a new schema and model
const bcrypt = require('bcrypt') // Our chosen our library used to hash passwords

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  skills: { type: Array, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password
    return json
  }
})

// This validates whether a password is correct at login
userSchema.methods.validatePassword = function validatePassword(password) {

  return bcrypt.compareSync(password, this.password) // bcyrpt hashes the password our user is trying to login with the same it hashed the one stored in the DB when they registered, it then compares them for us to see if they match, and returns true or false depending on the outcome
}

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function checkPassword(next) { // running before validation step
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match') // throws an error back to the controllers if the password passConf do not match
    }
    next() // otherwise allows to move on the Validate step
  })

userSchema
  .pre('save', function hashPassword(next) { // this happens before the mode is saved
    if (this.isModified('password')) { // if the password has been created or changed
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8)) // reassign as a hash of itself
    }
    next() // now move on to saving
  })

module.exports = mongoose.model('User', userSchema)