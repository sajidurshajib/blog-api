const express = require('express')
const postRoute = require('./routes/postRoutes')

const app = express()

app.use('/api/post',postRoute)

module.exports = app