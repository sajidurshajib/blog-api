const mongoose = require('mongoose')
const dotenv = require('dotenv')

// For Environment variable
dotenv.config({ path: './config.env' })
// App import
const app = require('./app')

// MongoDB
const dbLocal = process.env.DATABASE_LOCAL
const deprecatedDB = { 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex:true,
    useUnifiedTopology: true 
}
// Mongoose connect
mongoose
    .connect(dbLocal, deprecatedDB)
    .then(()=>{
        console.log('Database connection established.')
    })
    .catch((err)=>{
        console.log(err)
    })

// Server listenar
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`)
})