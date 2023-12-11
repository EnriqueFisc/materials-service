const router = require('express').Router();
const { getAllMaterials } = require('../../controllers/get');
const { tokenValidator } = require('../../middlewares/validationToken');

/**
 * @openapi
 * /materials:
 *   get:
 *     tags:
 *       - Obtener todos los materiales
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
 *                 data:
 *                   type: object 
 *                   properties:
 *                      name: 
 *                          type: string
 *                          example: material name
 *                      materialID: 
 *                          type: string
 *                          example: material id
 *                      gramsPrice: 
 *                          type: number
 *                          example: 1000
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
router.get('/',[ tokenValidator ], getAllMaterials);


module.exports = router;