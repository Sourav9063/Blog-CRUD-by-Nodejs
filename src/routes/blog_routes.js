const express = require('express');
const jwt_auth_func = require('../auth/jwt_auth_func');
const router = express.Router();


const blogController = require('../controllers/blog_controller');

router.get('/', jwt_auth_func.check_token, blogController.getBlogList);
router.get('/latest10', jwt_auth_func.check_token, blogController.getBlogLatest10);
router.get('/:id', jwt_auth_func.check_token, blogController.getBlogById);
router.post('/', jwt_auth_func.check_token, blogController.createNewBlog);
router.patch('/:id', jwt_auth_func.check_token, blogController.updateBlogByID);
router.delete('/delete/:id', jwt_auth_func.check_token, blogController.deleteBlogByID);

module.exports = router;