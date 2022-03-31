const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('Dinr'))

router.post('/profile', controllers.addRestaurant)

router.get('/swipe', controllers.getAllRestaurants)

router.get('/mymatches', controllers.getCustomerMatches)

router.put('/:customer_id/:restaurant_id', controllers.updateMatches)

router.delete('/:restaurant_id', controllers.deleteRestaurants)

router.delete('/matches/:restaurant_id', controllers.deleteMatches)

module.exports = router;
