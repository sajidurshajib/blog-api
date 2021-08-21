const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post must have a title']
    },
    body: {
        type: String,
        required: [true, 'A post must have a body']
    },
    author_id:{
        type: String,
        required: [true, 'A post must have author_id']
    },
    catagory:{
        type: String,
        required: [true, 'A post must have a catagory']
    },
    tags: {
        type: Array,
        required: [true, 'A post must have some tags']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Post = mongoose.model('Post', postSchema)

module.exports = Post