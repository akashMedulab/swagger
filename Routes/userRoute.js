const router = require('express').Router();
const userController = require('../Controllers/userController');

router.get('/allUsers', userController.getAllUser);

router.get('/oneUsers/:id', userController.getOneUser);

/**
 * 
 * /user/createUser:
 *  post:
 *    summary: Create a new user
 *    description: Creates a new user with the provided data
 *    parameters:
 *          - in: body
 *        name: user
 *        description: User object that needs to be created
 *        required: true
 *          schema:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *                example: shani
 *              lastName:
 *                type: string
 *                example: maurya
 *    responses:
 *      200:
 *        description: User Created Successfully
 *        schema:
 *          type: object
 *            properties:
 *              status:
 *                type: integer
 *                example: 201
 *              message:
 *                type: string
 *                example: User Created Successfully
 *              user:
//  *                $ref: #/definitions/User
 *      400:
 *        description: User Not Created
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: integer
 *              example: 400
 *            message:
 *              type: string
 *              example: User Not Created
 *      500:
 *        description: server error
 */

router.post('/createUser', userController.createUser);

router.put('/updateUser', userController.updateUser);

router.delete('/deleteUser', userController.deleteUser);

module.exports = router;