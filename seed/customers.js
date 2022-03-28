const db = require('../db')
const {Customer} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const customers = [
    {
      name: 'Eric Lantz',
      location: '30004',
      matchedRestaurants: []
    }
  ]

  await Customer.insertOne(customers)
  console.log('Created a new user')
}
const run = async () => {
  await main()
  db.close()
}

run()