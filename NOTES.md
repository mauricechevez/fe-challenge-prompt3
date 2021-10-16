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