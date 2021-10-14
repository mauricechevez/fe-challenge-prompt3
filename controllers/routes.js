const router = require('express').Router()
const axios = require('axios')

router.get('/',(req,res)=>{
    axios({
        method:'get',
        url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    }).then((result)=>{
        console.log(result.data.drinks[0].strDrink)
        res.render('index', { 
            result: result,
            title:null,
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes "
        } )
        return;

    }).catch((error)=>{
        console.log(` !!!! ERROR !!!!`)
        console.log(error)
    })
})

router.get('/about',(req,res)=>{
    res.render('pages/about.ejs',{
        title:"About | ",
        taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes "
    })
})

router.get('/recipes', (req,res)=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then((result)=>{
        const allDrinks = result.data.drinks
        // for(let i = 0; i < allDrinks.length; i++){
        //     console.log(allDrinks[i].strDrink)
        // }
        res.render('pages/allrecipes.ejs', {
            title:"Recipes | ",
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            allDrinks: allDrinks
        })
    })
    .catch((error)=>{
        console.log(`~~~~ ERROR in Alphabetical List~~~~`)
        console.log(error)
    })
})

router.get('/recipes/letter/:id', (req,res)=>{
    const letter = req.params.id;
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+ letter)
    .then((result)=>{
        const allDrinks = result.data.drinks
        res.render('pages/allrecipes.ejs', {
            title:"Recipes | ",
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            allDrinks: allDrinks
        })
    })
    .catch((error)=>{
        console.log(`~~~~ ERROR in Alphabetical List~~~~`)
        console.log(error)
    })
})

router.get('/recipes/name/:name', (req,res)=>{
    const name = req.params.name
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
    .then((result)=>{
        const drinkName = result.data.drinks[0]
        res.render('pages/recipe.ejs', {
            title: result.data.drinks[0].strDrink,
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            results: result.data.drinks[0]
        })
    })
    .catch((error)=>{
        console.log('~~~~ ERROR in Name of Drink ~~~~')
        console.log(error)
    })
})

router.get('/recipes/:id', (req,res)=>{
    const id = req.params.id;
    // Call the API
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' +id)
    .then((result)=>{
        console.log(result.data.drinks[0].idDrink)
        res.render('pages/recipe.ejs',{
            title:result.data.drinks[0].strDrink,
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            results: result.data.drinks[0]
        })
    })
})

module.exports = router