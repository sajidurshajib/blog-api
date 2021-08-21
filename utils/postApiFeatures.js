class PostApiFeatures{
    constructor(query, queryString){
        this.query = query
        this.queryString = queryString
    }

    filter(){
        const queryObj = {...this.queryString}
        const excludeFields = ['sort','fields','page','limit']
        excludeFields.forEach(elm => delete queryObj[elm])   
        
        this.query.find(queryObj)

        return this
    }

    sort(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ') //multiple field
            this.query = this.query.sort(sortBy)
        }
        else{
            this.query = this.query.sort('-createdAt')
        }

        return this
    }

    limitFields(){
        if(this.queryString.fields){
            const fields = this.queryString.fields.split(',').join(' ')
            this.query = this.query.select(fields)
        }
        else{
            this.query = this.query.select('-__v')
        }
        this.query = this.query.select('-__v') //remove it

        return this
    }

    paginate(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 10
        const skip = (page - 1) * limit

        this.query = this.query.skip(skip).limit(limit)

        return this
    }
}

module.exports = PostApiFeatures


        //Old code
        //filter query
        // const queryObj = {...req.query}
        // const excludeFields = ['sort','fields','page','limit']
        // excludeFields.forEach(elm => delete queryObj[elm])   


        // //find query
        // let query = Post.find(queryObj)
        
        
        //sort
        // if(req.query.sort){
        //     const sortBy = req.query.sort.split(',').join(' ') //multiple field
        //     query = query.sort(sortBy)
        // }
        // else{
        //     query = query.sort('-createdAt')
        // }


        //fields
        // if(req.query.fields){
        //     const fields = req.query.fields.split(',').join(' ')
        //     query = query.select(fields)
        // }
        // else{
        //     query = query.select('-__v')
        // }
        // query = query.select('-__v') //remove it


        //Pagination
        // const page = req.query.page * 1 || 1
        // const limit = req.query.limit * 1 || 10
        // const skip = (page - 1) * limit

        // query = query.skip(skip).limit(limit)

        // //page exception
        // if(req.query.page){
        //     const numPost = await Post.countDocuments()
        //     if(skip >= numPost) throw new Error('This page does not exist')
        // }