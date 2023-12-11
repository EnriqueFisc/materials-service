const router = require('express').Router();
const { getPriceByGrams } = require('../../controllers/price');
const { tokenValidator } = require('../../middlewares/validationToken');


/**
 * @openapi
 * /materials/price:
 *   post:
 *     tags:
 *       - Obtener precios
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *              type: string
 *         description: Token to create material
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 price:
 *                   type: number 
 *                   example: 2000    
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                    type: boolean
 *                    example: false
 *                 msg:
 *                    type: string 
 *                    exapmle: Something went wrong while getting Material
 */
router.post('/price',[ tokenValidator ], getPriceByGrams);


module.exports = router;