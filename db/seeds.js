const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
    //   return User.create([
    //     {
    //       username: 'xxx',
    //       email: 'xxx',
    //       password: 'xxx',
    //       passwordConfiramtion: 'xxx'
    //     }
    //   ])
    // })
    // .then(createdUsers => {
    //   console.log(`${'👩‍🚒'.repeat(createdUsers.length)} users created`)
      return User.create([
        {
<<<<<<< HEAD
          name: 'xxx',
          email: 'xxx',
          password: 'xxx',
          passwordConfiramtion: 'xxx'
          
=======
          name: 'Ben Parker',
          email: 'ben@email.com',
          image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          skills: ['Moroccan', 'Turkish/Middle-Eastern', 'Italian'],
          city: 'London',
          postcode: 'SW19 3ES',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Beth Williams',
          email: 'beth@email.com',
          image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
          skills: ['French', 'Italian', 'Greek'],
          city: 'London',
          postcode: 'SE11 5EL',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Edgar Riveria',
          email: 'edgar@email.com',
          image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          skills: ['Mexican', 'Spanish', 'Vegan', 'Vegetarian'],
          city: 'London',
          postcode: 'E17 6RE',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Harry Kent',
          email: 'harry@email.com',
          image: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          skills: ['South East Asian', 'Korean', 'Vegan'],
          city: 'London',
          postcode: 'SW1V 2JP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jessica Wood',
          email: 'jessica@email.com',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          skills: ['Greek', 'Chinese', 'Indian'],
          city: 'London',
          postcode: 'SE19 1XB',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Sergio De Paula',
          email: 'sergio@email.com',
          image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          skills: ['Vegetarian', 'Indian'],
          city: 'London',
          postcode: 'W1F 9NE',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Steph Gardiner',
          email: 'steph@email.com',
          image: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          skills: ['Japanese'],
          city: 'London',
          postcode: 'WC1B 3RD',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Francesca Harris',
          email: 'francesca@email.com',
          image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          skills: ['African', 'Caribbean'],
          city: 'London',
          postcode: 'NW1 3UJ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Marius Stone',
          email: 'marius@email.com',
          image: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80',
          skills: ['Chinese', 'Japanese'],
          city: 'London',
          postcode: 'N1P 1SG',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Angela Reed',
          email: 'angela@email.com',
          image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          skills: ['Mexican', 'Spanish', 'Moroccan', 'French'],
          city: 'London',
          postcode: 'N17 0BF',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jack Minton',
          email: 'jack6@email.com',
          image: 'https://images.unsplash.com/photo-1496056013337-d6a1dd4fb8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          skills: ['Japanese', 'Vegan', 'Italian'],
          city: 'London',
          postcode: 'SE9 3DA',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'John Malcolm',
          email: 'John5@email.com',
          image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
          skills: ['Spanish', 'Greek'],
          city: 'London',
          postcode: 'SE28 0FF',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Samantha Rudd',
          email: 'Sam4@email.com',
          image: 'https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          skills: ['Mexican', 'Vegetarian'],
          city: 'London',
          postcode: 'SE5 7PP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Mack Jay',
          email: 'Mack@email.com',
          image: 'https://images.unsplash.com/photo-1492462543947-040389c4a66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          skills: ['Caribbean'],
          city: 'London',
          postcode: 'SE8 3JW',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jennifer Fray',
          email: 'jennifer5@email.com',
          image: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          skills: ['African', 'Chinese'],
          city: 'London',
          postcode: 'SE8 3JW',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Asai Hiro',
          email: 'Asai@email.com',
          image: 'https://images.unsplash.com/photo-1551670081-bdf27640ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          skills: ['Vegetarian', 'Japanese'],
          city: 'London',
          postcode: 'SE9 5HP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Safiri Abdu',
          email: 'safiri@email.com',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          skills: ['African', 'Vegan'],
          city: 'London',
          postcode: 'SE6 9LP',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Ataleo Signorelli',
          email: 'ataleo@email.com',
          image: 'https://images.unsplash.com/photo-1521807058-4df699de90db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          skills: ['Italian'],
          city: 'London',
          postcode: 'N22 7UQ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Ender Yenal',
          email: 'Ender@email.com',
          image: 'https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          skills: ['Turkish/Middle-Eastern', 'Vegan'],
          city: 'London',
          postcode: 'N22 8PH',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Alejandro Curbelo',
          email: 'Alejandro@email.com',
          image: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          skills: ['Mexican', 'Spanish'],
          city: 'London',
          postcode: 'W9 2JW',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Tahirah Jarrett',
          email: 'tea@jay.com',
          image: 'https://images.unsplash.com/photo-1528809217021-151305b50e55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['Caribbean', 'South-East Asian', 'Greek'],
          city: 'Kilburn',
          postcode: 'DH1 3YD',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Katherine Gonzalez',
          email: 'kat@gon.com',
          image: 'https://images.unsplash.com/photo-1542662482-65e2129ea2bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['African', 'Spanish', 'Greek'],
          city: 'Clapham',
          postcode: 'HA5 3XX',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Rebecca Dunncan',
          email: 'beck@dun.com',
          image: 'https://images.unsplash.com/photo-1495383294417-3166600af8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['South-East Asian', 'Greek'],
          city: 'Brixton',
          postcode: 'SP4 0AS',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Jenny Byrnes',
          email: 'jen@byrn.com',
          image: 'https://images.unsplash.com/photo-1532800393221-f7c187ad204a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['Caribbean', 'Spanish'],
          city: 'Chelsea',
          postcode: 'BS3 3HH',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Talia Bunda',
          email: 'talia@bun.com',
          image: 'https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['Chinese', 'French', 'African'],
          city: 'Queens Park',
          postcode: 'NW3 1LJ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Patrick Gowie',
          email: 'pat@gow.com',
          image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['Turkish/Middle-Eastern'],
          city: 'Peckham',
          postcode: 'E3 3LG',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Ena Maud',
          email: 'mummy@jane.com',
          image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['South-East Asian', 'Caribbean'],
          city: 'Hackney Downs',
          postcode: 'HA9 0PA',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Kelsey Marie',
          email: 'kels@marie.com',
          image: 'https://images.unsplash.com/photo-1515081770940-d32ee225699e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['Spanish'],
          city: 'Notting Hill',
          postcode: 'SS13 2AQ',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Joan Taylor',
          email: 'joan@tay.com',
          image: 'https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['Mexican', 'South-East Asian', 'Indian'],
          city: 'Hackney Downs',
          postcode: 'E8 1EY',
          password: 'pass',
          passwordConfirmation: 'pass'
        }, {
          name: 'Devon Brown',
          email: 'surf@allah.com',
          image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          skills: ['Vegetarian', 'South-East Asian', 'Vegan'],
          city: 'Harrow',
          postcode: 'PH21 1LQ',
          password: 'pass',
          passwordConfirmation: 'pass'
>>>>>>> development
        }
      ])
    })
    .then(createdUser => console.log(`${createdUser.length} users created `))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})