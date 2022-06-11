const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');


router.get('/', userController.getUserList);
// router.get('/:id', userController.getUserById);
router.post('/signup', userController.createNewUser);
router.get('/signin', userController.signIn);

module.exports = router;