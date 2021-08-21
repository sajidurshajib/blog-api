const express = require('express')
const postController = require('../controllers/postController')

const router = express.Router()

router.param('id',postController.checkID)

router
    .route('/')
    .get(postController.allPosts)
    .post(postController.createPost)
router
    .route('/:id')
    .get(postController.singlePost)
    .patch(postController.editPost)
    .delete(postController.deletePost)

module.exports = router