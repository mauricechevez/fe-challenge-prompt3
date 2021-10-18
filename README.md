# Front End Challenge
This challenge has been deployed to Heroku. Check it out:
[Salud! Drinks Finder](https://salud-drinks-finder.herokuapp.com/)

# Third-Party API 
This project uses the [CocktailDB](https://www.thecocktaildb.com/api.php) to create a Cocktail themed site.

# Routing Table
| Verb | URL | Action (CRUD) | Description
| ------- | ------- | ------- | ------- |
| GET | / | Index (Read) | The homepage with list of drinks | 
| GET | /about | (Read) | About the project |
| GET | /recipes | (Read) | Shows list of drinks, in alphabetical order, for visitor to browse. |
| GET | /recipes/list/1-10 | (Read) | Shows list of drinks that begin with numbers | 
| GET | /recipes/list/:letter | (Read) | List of drinks based on the first letter in the name of the drink |
| GET | /recipes/name/:name | (Read) | Shows each drink's picture, ingredients and recipe instructions. To be used for the search box as well|
| GET | /recipes/result/:name | (Read) | For results originating from the search field in the navbar.|
| GET | /recipes/no-alcohol | (Read) | Shows list of non-alcoholic drinks | 
| GET | /recipes/mixed-drinks | (Read) | Shows items from the category "Ordinary Drinks" from the API | 
| GET | /recipes/cocktails | (Read) | Shows items from the category "Cocktails" from the API |
| GET | /* | (Read) | For 404. |

# JSON Data from API
The data comes back as `result.data.drinks`, each with its own index number. Here is a sample of a returned query for "margarita":
```json
{
            "idDrink": "11007",
            "strDrink": "Margarita",
            "strDrinkAlternate": null,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strInstructionsES": null,
            "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
            "strInstructionsFR": null,
            "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": null,
            "strIngredient6": null,
            "strIngredient7": null,
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": null,
            "strMeasure5": null,
            "strMeasure6": null,
            "strMeasure7": null,
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
            "strImageAttribution": "Cocktailmarler",
            "strCreativeCommonsConfirmed": "Yes",
            "dateModified": "2015-08-18 14:42:59"
        },

```


# Installation Requirements
Here is a list of software required for this project to work for you:
* Express
* Axios
* EJS
* EJS Layouts
* Nodemon (optional, but highly recommended.)

## Install Locally
1. Fork and Clone this respository to your local machine
2. Open index.html in your browser to play or
3. Open the directory in your text editor of choice to view or edit the code


# Future Considerations
* Create more 404 routes to handle intentionally requested "bad" urls.
* ~~The **U** and **X** links (under all recipes, route `/recipes/list/:letter`) do not exist in the database. I've currently set it send a generic message stating these do not exist. I need to create a proper template for these pages.~~ Complete.
* Add text to go over the carousel images, to describe what they are, maybe even go to a blog post about the drinks or something realted.
* Create a footer that matches the navbar style.
* Add more styling or text to the cup logo.

# Resources

Multiple Axios calls - [link](https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios) - used for page which renders the drinks beginning with numbers.

EJS including EJS-Layouts Tutorial by Raddy - [link](https://raddy.co.uk/blog/nodejs-express-layouts-and-partials/)

## Images
[Pexels](https://www.pexels.com/) - For free images used on this site that did not come from the API.

