const {model} = require('mongoose')
const RestaurantSchema = require('./Restaurant')
const CustomerSchema = require('./Customer')

const Restaurant = model('Restaurant', RestaurantSchema)
const Customer = model('Customer', CustomerSchema)

module.exports = {
  Restaurant,
  Customer
}
