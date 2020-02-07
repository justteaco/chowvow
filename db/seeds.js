const mongoose = require('mongoose')
const { dbURI } = require()
const User = require()

mongoose.connect(dbURI, { useNewUrParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'xxx',
          email: 'xxx',
          password: 'xxx',
          passwordConfiramtion: 'xxx',
        }
      ])
    })
    .then(createdUsers => {
      console.log(`${'👩‍🚒'.repeat(createdUsers.length)} users created`)
      return User.create([

      ])
    })
    .then(createdUser => console.log(`${'* '.repeat(createdUser.length)} chefs created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})