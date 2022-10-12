require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const serviceRoutes = require('./routes/servicesRoutes')
const userRoutes = require('./routes/userRoutes')



// excpress app
const app = express()


// middleware
// cors
app.use( 
    cors({
        origin: "http://localhost:3000"
    })
)

// to access the request body
app.use(express.json()) /*  this takes body of requests then
                            parses the data in the body So we
                            can access data in req handeller */


// to log request path and method
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
 

// routes
app.use('/api/services', serviceRoutes)
app.use('/api/user', userRoutes)


// connet to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to DB')
        // listen for request
        app.listen(process.env.PORT, ()=>{
            console.log('listening on port', process.env.PORT)
        }) 
    })
    .catch((error) => {
        console.log(error)
    })


