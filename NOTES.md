# EJS Layout
Note to self: 
```
npm install express-ejs-layouts
```

### Requirements for EJS Layouts
By default, `ejs-layouts` is looking for a file called `layout.ejs`. This can be changed:

```
...TBC...
```
### Adding to the server app
```js
// Imports (what I called Requirements)
const expressLayouts = require('express-ejs-layouts')

//Middleware
app.use(expressLayouts)

```

# Dropdown Menu (navbar)
On hover, I'd like the "Category" dropdown menu to reveal itself, rather than have the visitor manually click it to reveal the dropdown. Here are the changes that are required.

```html
<a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category</a>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a href="/recipes/mixed-drinks" class="dropdown-item">Mixed Drinks</a></li>
                  <li><a href="/recipes/cocktails" class="dropdown-item">Cocktails</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a href="/recipes/no-alcohol" class="dropdown-item">Non-Alcoholic</a></li>
                </ul>
```
Needs to change to this:
```html
<a href="#" class="nav-link dropdown-toggle show" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">Category</a>
<ul class="dropdown-menu show" aria-labelledby="navbarDropdown" data-bs-popper="none">
                  <li><a href="/recipes/mixed-drinks" class="dropdown-item">Mixed Drinks</a></li>
                  <li><a href="/recipes/cocktails" class="dropdown-item">Cocktails</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a href="/recipes/no-alcohol" class="dropdown-item">Non-Alcoholic</a></li>
                </ul>
```
The differences are :
For the `<a>` tag, the `show` property is added to the attribute for `class`, as well as `aria-expanded` is given the property of `true`.
for the `<ul>` tag, the attribute `class` has `show`. The attribute `data-bs-popper` is also added with a value of `none`.

This task can be accomplished through javascript.

## Null returns from API
`result.data.drinks` comes back as `null` when the API doesn't have data from your query. Knowing this, I will need to handle errors if someone 