const express = require('express');
const router = express.Router();
const jwt_auth_func = require('../auth/jwt_auth_func');

const userController = require('../controllers/user_controller');


router.get('/', userController.getUserList);
// router.get('/:id', userController.getUserById);
// router.get('/:email', userController.getUserByEmail);
router.get('/info', jwt_auth_func.check_token, userController.getUserByEmail)
router.post('/signup', userController.createNewUser);
router.post('/signin', userController.signIn);
router.patch('/update', jwt_auth_func.check_token, userController.updateUser);

module.exports = router;