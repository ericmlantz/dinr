const {Restaurant, Customer} = require('../models')

const addRestaurant = async (req, res) => {
  try {
    const restaurant = await new Restaurant(req.body)
    await restaurant.save()
    return res.status(201).json({
      restaurant
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = {
  addRestaurant,
}