const router = require('express').Router()
const axios = require('axios')

router.get('/',(req,res)=>{
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

router.get('/about',(req,res)=>{
    res.render('pages/about.ejs')
})

router.get('/recipes', (req,res)=>{
    res.send(`<h1>All Recipes</h1>`)
})

router.get('/recipes/:id', (req,res)=>{
    res.send(`<h1>Specific Recipe</h1>`)
})

module.exports = router