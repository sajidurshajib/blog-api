// Check ID Param middleware
exports.checkID = (req, res, next, val)=>{
    if(req.params.id > 5){
        return res
            .status(400)
            .json({
                msg:'Invalid id'
            })
    }
    next()
}


// All Posts 
exports.allPosts = (req, res)=>{
    res
    .status(200)
    .json({
        msg:'All posts'
    })
}

// Create Posts
exports.createPost = (req, res)=>{
    res
    .status(200)
    .json({
        msg:'Create post'
    })
}

// Single Post
exports.singlePost = (req, res)=>{
    res
    .status(200)
    .json({
        msg:'Single Post'
    })
}

// Edit Post
exports.editPost = (req, res)=>{
    res
    .status(200)
    .json({
        msg:'Edit Post'
    })
}

// Delete Post
exports.deletePost = (req, res)=>{
    res
    .status(200)
    .json({
        msg:'Delete Post'
    })
}