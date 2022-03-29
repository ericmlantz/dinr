const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('Dinr'))

router.post('/profile', controllers.addRestaurant)

router.get('/swipe', controllers.getAllRestaurants)

module.exports = router;
