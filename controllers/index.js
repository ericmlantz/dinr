const db = require('../db')
const {Restaurant, Customer} = require('../models')

const addRestaurant = async (req, res) => {
  try {
    const restaurant = await new Restaurant(req.body)
    await restaurant.save()
    return res.status(201).json({restaurant})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
    return res.status(200).json({ restaurants })
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getCustomerMatches = async (req, res) => {
  try {
    const customer = await Customer.find()
    let matches=customer[0].matchedRestaurants
    let restaurants = []
    for(let i=0; i<matches.length; i++) {
      let match = await Restaurant.findById(matches[i])
      restaurants.push(match)
    }
    return res.status(200).json(restaurants)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateMatches = async (req, res) => {
  try {
    const {customer_id, restaurant_id} = req.params
    const customer = await Customer.find()
      let matches=customer[0].matchedRestaurants
      matches.push(restaurant_id)
      const updatedMatch = await Customer.updateOne({_id:customer_id},{$addToSet: {matchedRestaurants:matches}})
      return res.status(200).json({updatedMatch})
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteRestaurants = async (req, res) => {
  try {
    const { restaurant_id } = req.params
    const deleted = await Restaurant.findByIdAndDelete(restaurant_id)
    if (deleted) {
      return res.status(200).send('Restaurant deleted')
    }
    throw new Error('Restaurant not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMatches = async (req, res) => {
  try {
    const {restaurant_id} = req.params
    const customer = await Customer.find()
    let matches=customer[0].matchedRestaurants
    for(let i=0; i<matches.length; i++) {
      if(matches[i]._id===restaurant_id) {
        matches.splice(i, 1)
        return res.status(200).send('Match deleted')
      }
      else {
        throw new Error('Match not found')
      }
    }
    } catch (error) {
    return res.status(500).send(error.message)
  }
}
  

module.exports = {
  addRestaurant,
  getAllRestaurants,
  getCustomerMatches,
  updateMatches,
  deleteRestaurants,
  deleteMatches
}