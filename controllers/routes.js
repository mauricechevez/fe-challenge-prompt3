const express = require('express')
const router = require('express').Router()
const axios = require('axios')
const app = express()

app.use(express.urlencoded({extended: true}))


router.get('/',(req,res)=>{
        res.render('index', { 
            title:null,
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes "
        } )
        return;
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
        res.render('pages/allrecipes.ejs', {
            title:"Recipes | ",
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            allDrinks: allDrinks,
            letter: 'a'
        })
    })
    .catch((error)=>{
        console.log(`~~~~ ERROR in Alphabetical List~~~~`)
        console.log(error)
    })
})

router.get('/recipes/no-alcohol', (req,res)=>{
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
    .then((result)=>{
        const noAlcohol = result.data.drinks
        res.render('pages/nonalcoholic.ejs', {
            title:"Recipes | ",
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            allDrinks: noAlcohol,
        })
    })
    .catch((error)=>{
        console.log('~~~~ ERROR in Non-Alcoholic Drink ~~~~')
        console.log(error)
    })
})

router.get('/recipes/mixed-drinks', (req,res)=>{
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
    .then((result)=>{
        const mixedDrinks = result.data.drinks
        console.log(mixedDrinks.length)
        res.render('pages/mixedrinkslist.ejs', {
            title:"Mixed Drinks | ",
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            allDrinks: mixedDrinks,
        })
    })
    .catch((error)=>{
        console.log('~~~~ ERROR in Mixed Drinks ~~~~')
        console.log(error)
    })
})

router.get('/recipes/cocktails', (req,res)=>{
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
    .then((result)=>{
        const cocktails = result.data.drinks
        console.log(cocktails.length)
        res.render('pages/cocktails.ejs', {
            title:"Cocktails | ",
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            allDrinks: cocktails,
        })
    })
    .catch((error)=>{
        console.log('~~~~ ERROR in Mixed Drinks ~~~~')
        console.log(error)
    })
})


// Multiple Axios Calls
router.get('/recipes/list/1-10', (req,res)=>{
    let drinksList01 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=1`;
    let drinksList02 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=2`;
    let drinksList03 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=3`;
    let drinksList04 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=4`;
    let drinksList05 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=5`;
    let drinksList06 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=6`;
    let drinksList07 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=7`;
    let drinksList08 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=8`;
    let drinksList09 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=9`;
    let drinksList10 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=10`;
    const req01 = axios.get(drinksList01)
    const req02 = axios.get(drinksList02)
    const req03 = axios.get(drinksList03)
    const req04 = axios.get(drinksList04)
    const req05 = axios.get(drinksList05)
    const req06 = axios.get(drinksList06)
    const req07 = axios.get(drinksList07)
    const req08 = axios.get(drinksList08)
    const req09 = axios.get(drinksList09)
    const req10 = axios.get(drinksList10)


    axios.all([req01, req02, req03, req04, req05, req06, req07, req08, req09, req10])
    .then(axios.spread((...responses)=>{
        const request01 = responses[0].data.drinks
        const request02 = responses[1].data.drinks
        const request03 = responses[2].data.drinks
        const request04 = responses[3].data.drinks
        const request05 = responses[4].data.drinks
        const request06 = responses[5].data.drinks
        const request07 = responses[6].data.drinks
        const request08 = responses[7].data.drinks
        const request09 = responses[8].data.drinks
        const request10 = responses[9].data.drinks
        
        res.render('pages/allrecipes-num.ejs',{
            title:"Recipes List | ",
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            request01: request01,
            request02: request02,
            request03: request03,
            request04: request04,
            request05: request05,
            request06: request06,
            request07: request07,
            request08: request08,
            request09: request09,
            request10: request10
        })
    }))
    .catch((error)=>{
        console.log(`~~~~ ERROR in Numerical List~~~~`)
        console.log(error)
    })
})

router.get('/recipes/list/:letter', (req,res)=>{
    const letter = req.params.letter;
    if (letter === 'u' || letter === 'x'){
        // res.send(`<h1>Drinks starting with the letter "${letter}" do not exist in the database.</h1>`)
        res.render('pages/letter_notfound.ejs', {
                title:"Recipes | ",
                taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
                letter:letter
        })
    } else{ 
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+ letter)
        .then((result)=>{
            const allDrinks = result.data.drinks
            res.render('pages/allrecipes.ejs', {
                title:"Recipes | ",
                taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
                allDrinks: allDrinks,
                letter:letter
            })
        })
        .catch((error)=>{
            console.log(`~~~~ ERROR in Alphabetical List~~~~`)
            console.log(error)
        })
    }
    
})

router.get('/recipes/name/:name', (req,res)=>{
    const name = req.params.name
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
    .then((result)=>{
        const drinkName = result.data.drinks[0]
        res.render('pages/recipe.ejs', {
            title: drinkName.strDrink,
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            results: result.data.drinks[0]
        })
       }       
    )
    .catch((error)=>{
        setError = error
        console.log('~~~~ ERROR in Name of Drink ~~~~')
        console.log(error)
        return res.redirect('/')
        
    })
})

// For Search Input
router.get('/recipes/result/:name', (req,res)=>{
    const name = req.query.name
    console.log(name)
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
    .then((result)=>{
        if (result.data.drinks == null){
            return res.render('pages/recipe_notfound.ejs', {
                title: name,
                taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
                results: null
            })
        }

        if(result.data.drinks != null || result.data.drinks != 'undefined' || result.data.drinks != "null"){
        const drinkName = result.data.drinks[0]
        res.render('pages/recipe.ejs', {
            title: drinkName.strDrink,
            taglineTitle: "🍹 ¡Salud! 🍹 Drinks Recipes",
            results: result.data.drinks[0]
        })
        } else if (result.data.drinks == null){
            return res.redirect('/')
        }
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

router.get('/*', (req,res)=>{
    res.send(`<h1>404</h1>`)
})

module.exports = router