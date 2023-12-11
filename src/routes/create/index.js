const router = require('express').Router();
const { createMaterial } = require('../../controllers/create');
const { tokenValidator } = require('../../middlewares/validationToken');


/**
 * @openapi
 * /materials/create:
 *   post:
 *     tags:
 *       - Creacion de material
 *     parameters:
 *       - in: body
 *         name: material data
 *         schema:
 *           type: object 
 *           properties:
 *              name: 
 *                  type: string
 *                  example: material name
 *              materialID: 
 *                  type: string
 *                  example: material id
 *              gramsPrice: 
 *                  type: number
 *                  example: 1000
 *         description: Material to create
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
 *                 msg:
 *                   type: string 
 *                   exapmle: 'Material created successful'
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
 *                    exapmle: Something went wrong while creating Material
 */
router.post('/create',[ tokenValidator ], createMaterial);


module.exports = router;