const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog_controller');

router.get('/', blogController.getBlogList);
router.get('/latest10', blogController.getBlogLatest10);
router.get('/:id', blogController.getBlogById);
router.post('/', blogController.createNewBlog);


module.exports = router;