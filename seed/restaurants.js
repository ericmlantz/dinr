const db = require('../db')
const { Restaurant } = require('../models')

// Connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const restaurants = [
    {
      name: 'Flip Burger Boutique and Bar',
      logo: 'https://static.spotapps.co/web/flipburgerboutique--com/custom/logo.png',
      location: '1587 Howell Mill Rd, Atlanta, GA 30318',
      typeOfFood: 'American',
      description: 'Leave your typical burger joint notions at the door. We take the American classic and flip it on its head to deliver a unique culinary experience on a bun. FLIP is all about creating a modern, imaginative, chef-driven dining experience that gives all your senses a night out.',
      bestDish: 'https://static.spotapps.co/web/flipburgerboutique--com/custom/about/bison_burger.jpg',
      phone: '4043431609',
    },
    {
      name: 'Chipotle - Mexican Grill',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/800px-Chipotle_Mexican_Grill_logo.svg.png',
      location: '3050 Windy Hill Rd SE, Atlanta, GA 30339',
      typeOfFood: 'Mexican',
      description: 'Chipotle is an American restaurant chain that serves a simple menu of Mexican-inspired food. Founded in Denver, Colorado, in 1993 by Steve Ells, a classically trained chef, Chipotle has grown to more 2,000 store locations, which together serve over 1 million customers daily.',
      bestDish: 'https://fastfoodnutrition.org/item-photos/full/3808_s.jpg',
      phone: '7706420710',
    },
  ]
  await Restaurant.insertMany(restaurants)
  console.log("Created some restaurants")
}

const run = async () => {
  await main()
  db.close()
}

run()