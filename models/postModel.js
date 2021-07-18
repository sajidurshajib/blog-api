const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A post must have a title']
    },
    body: {
        type: String,
        required: [true, 'A post must have a body']
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post