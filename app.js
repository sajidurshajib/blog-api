const express = require('express')
const morgan = require('morgan')
const postRoute = require('./routes/postRoutes')

// Start express
const app = express()

// Check API
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

// Use route
app.use('/api/post',postRoute)

module.exports = app