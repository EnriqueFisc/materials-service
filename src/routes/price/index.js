const router = require('express').Router();
const { getPriceByGrams } = require('../../controllers/price');
const { tokenValidator } = require('../../middlewares/validationToken');


router.post('/price',[ tokenValidator ], getPriceByGrams);


module.exports = router;