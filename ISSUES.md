# Issues
Here I will document what issues I experienced, and how they were fixed

## Missing Layout/Not Rendering
The `layout.ejs` file would not load. Starting the server (`npm start`), only the contents of `index.ejs` would load. I only saw the carousel and the featured drinks section. When looking at the rendered output in Chrome, the `<head>` section was missing, as well as the footer. Therefore, none of the CSS (incl. Bootstrap), Google Fonts,  and custom JS code was loading.
The following is a list of actions tried, **without** success.

* I suspected it had something to do with sub folders, so I got rid of most of them. Now most of the content is directly under the **views** folder.
* I changed the name of the index page to "welcome", and configured my controller to render this. 
* Used `node server.js` to start the server instead of using nodemon.
* Explicitly stated which layout file to use : `app.set('layout', 'layout');`
* Explicitly stated where to find the views folder: `app.set('views', __dirname + '/views')`
* Made sure cache was disabled under Chrome Dev tools.
* Restarted VSCode.

### Result
After trying the above, plus a few more things that I can't remember, I gave up and called it a night, since I had other things to do. The next morning, it magically worked! I suspect that I would have:

* Restarted Ubuntu using the services.msc
* Restarted my computer.

I believe this issue happened to someone else during my cohort, as it sounded familiar. If I remember correctly, rebooting their computer fixed the issue as well. 🤷🏻‍♂️