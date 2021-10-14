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

router.get('/recipes/list/:id', (req,res)=>{
    const letter = req.params.id;
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
})

router.get('/recipes/name/:name', (req,res)=>{
    const name = req.params.name
    console.log(typeof (name))
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

router.get('/*', (req,res)=>{
    res.send(`<h1>404</h1>`)
})

module.exports = router