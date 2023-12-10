const router = require('express').Router();
const { createMaterial } = require('../../controllers/create');
const { getAllMaterials } = require('../../controllers/get');
const { tokenValidator } = require('../../middlewares/validationToken');


router.post('/create',[ tokenValidator ], createMaterial);
router.get('/',[ tokenValidator ], getAllMaterials);


module.exports = router;