// Requirements
const { application } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts')

// Middleware
app.use(express.urlencoded({extended: false}))
// app.use(express.urlencoded({ extended: false }));


// Static Files Folder
app.use(express.static("public"))
app.use('/css',express.static(__dirname + '/public/css'));
app.use('/js',express.static(__dirname + '/public/js'));



// Template Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
// app.set('layout', 'layout');
// app.set('views', __dirname + '/views');

app.use('/', require('./controllers/routes'))

// Port Listener
app.listen(PORT, (req,res)=>{
    console.log(` ~~~ Server Started - Listening on ${PORT} ~~~ `)
})