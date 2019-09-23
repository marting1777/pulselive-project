// Load up the express framework and body-parser helper
const express = require('express')
const bodyParser = require('body-parser')

// Instance of express to serve our end points
const app = express()

// Node's built in file system helper library
const fs = require('fs')

// Instance with some body-parser settings + Handling JSON data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Handle routes
const routes = require('./routes/routes.js')(app, fs)

// Launch server on port 3000
const server = app.listen(5000, () => {
    console.log('Server up on port ', server.address().port)
})