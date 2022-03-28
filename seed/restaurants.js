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
      phone: '4043431609'
    },
    {
      name: 'The Orient Atlanta - Chinese, Sushi, Hibachi',
      logo: 'https://scontent.fatl1-1.fna.fbcdn.net/v/t1.6435-9/135558998_117853336851140_7310298394234798425_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MGrlYQyUT9oAX_vcQ-x&_nc_ht=scontent.fatl1-1.fna&oh=00_AT9qIvZ-V12HfvBXF95SHRpERins_H49fwhMQnkPxJVJXQ&oe=62686C6F',
      location: '3050 Windy Hill Rd SE, Atlanta, GA 30339',
      typeOfFood: 'Chinese',
      description: 'Produce that is used out of season will always leave you wanting. That’s why we use only the best seasonal produce to create a fabulous menu of your favorites. The Orient is the best place to spend your leisure time tasting delicious food and enjoying the nice atmosphere. After visiting our restaurant you will definitely have a wish to come back!',
      bestDish: 'https://theorientatlanta.com/wp-content/uploads/2021/01/Gallery-02.png',
      phone: '7706122727'
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