const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('Dinr'))

router.post('/addrestaurant', controllers.addRestaurant)

module.exports = router;
