const router = require('express').Router();
const { getAllMaterials } = require('../../controllers/get');
const { tokenValidator } = require('../../middlewares/validationToken');


router.get('/',[ tokenValidator ], getAllMaterials);


module.exports = router;