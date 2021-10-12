// Requirements
const { application } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const axios = require('axios')

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.use('/', require('./controllers/routes'))

// Static Files Folder
app.use(express.static("public"))


// Template Engine
app.set('view engine', 'ejs')

// Routes




// Port Listener
app.listen(PORT, (req,res)=>{
    console.log(` ~~~ Server Started - Listening on ${PORT} ~~~ `)
})