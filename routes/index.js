const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('Dinr'))

router.post('/profile', controllers.addRestaurant)

router.get('/swipe', controllers.getAllRestaurants)

router.get('/mymatches', controllers.getCustomerMatches)

router.put('/restaurants/:restaurant_id', controllers.updateMatches)

router.delete('/restaurants/delete/:restaurant_id', controllers.deleteRestaurants)


router.delete('/mymatches/delete/:restaurant_id', controllers.deleteMatches)



router.get('/allcustomers', controllers.getAllCustomers)

module.exports = router;
