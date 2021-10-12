// Requirements
const { application } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const axios = require('axios')

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

// Static Files Folder
app.use(express.static("public"))


// Template Engine
app.set('view engine', 'ejs')

// Routes
app.get('/',(req,res)=>{
    axios({
        method:'get',
        url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    }).then((result)=>{
        console.log(result.data.drinks[0].strDrink)
        res.render('pages/index', { result } )
        return;

    }).catch((error)=>{
        console.log(` !!!! ERROR !!!!`)
        console.log(error)
    })
})

app.get('/about',(req,res)=>{
    res.render('pages/about.ejs')
})

app.get('/recipe', (req,res)=>{
    res.send(`<h1>All Recipes</h1>`)
})

app.get('/recipe/:id', (req,res)=>{
    res.send(`<h1>Specific Recipe</h1>`)
})



// Port Listener
app.listen(PORT, (req,res)=>{
    console.log(` ~~~ Server Started - Listening on ${PORT} ~~~ `)
})