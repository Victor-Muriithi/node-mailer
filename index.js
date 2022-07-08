const express = require('express')

const app = express()

const mailRoute = require('./routers/mailRoutes')

const port = 5000

app.use('/email', mailRoute)

app.listen(port, ()=>{
    console.log(`The server is running at port ${port}`)
})