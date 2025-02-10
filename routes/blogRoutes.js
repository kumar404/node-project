const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

//Get all
router.get('/', blogController.blog_index);

// new blog post
router.post('/', blogController.blog_create_post);

// Get single blog details
router.get('/:id', blogController.blog_details);

// Delete blog post
router.delete('/:id', blogController.blog_delete);

module.exports = router;