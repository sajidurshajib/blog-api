const Post = require('../models/postModel')
const PostApiFeatures = require('../utils/postApiFeatures')

// Check ID Param middleware
exports.checkID = async (req, res, next, val)=>{
    try {
        const post = await Post.findById(val)
        if(post.length === 0){
            return res
                .status(400)
                .json({
                    status:'ID not found'
                })
        }
        next()
    } catch (error) {
        return res
            .status(400)
            .json({
                status:'Invalid ID',
                msg:error
            })
    }
    
}



// All Posts 

exports.allPosts = async (req, res)=>{
    try {
        const features = new PostApiFeatures(Post.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate()

        //final query
        const post = await features.query

        //respond
        res
        .status(201)
        .json({
            status:'Success',
            results: post.length,
            data:{
                post
            }
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status:'Failed',
            msg:error
        })  
    }
}



// Create Posts

exports.createPost = async (req, res)=>{
    try {
        const newPost = await Post.create(req.body)
        
        res
        .status(201)
        .json({
            status:'Success',
            data: {
                post: newPost
            }
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status:'Failed',
            msg:error
        })
    }
}



// Single Post

exports.singlePost = async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id)
        
        res
        .status(201)
        .json({
            status:'Success',
            data:{
                post
            }
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status:'Failed',
            msg:error
        })  
    }
}



// Edit Post

exports.editPost = async (req, res)=>{
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res
        .status(200)
        .json({
            status:'Success',
            data:{
                post
            }
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status:'Failed',
            msg:error
        })  
    }
}




// Delete Post

exports.deletePost = async (req, res)=>{
    try {
        await Post.findByIdAndDelete(req.params.id)
        
        res
        .status(201)
        .json({
            status:'Success',
            data:null
        })
    } catch (error) {
        res
        .status(400)
        .json({
            status:'Failed',
            msg:error
        })  
    }
}