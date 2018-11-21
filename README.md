# Technical Challenge

There are 2 folders, `api` for the backend and `app` for the frontend, each is it's own npm package.  I've included a Makefile to tie the 2 together, but you can also run commands inside each folder direct from the package.json.

## Commands
* `make install` Install dependencies for both packages
* `make test` Runs all tests
* `make run` Runs the api on one port and uses parcel bundler to set up a dev server on port 1234

In order to view the app with the different data sets (no recipes and one recipe):
`export DATASOURCE=noRecipes` or `oneRecipe` before `make run`

## Notes

* I'm using css grid for layout and fetch for http requests so this app won't work on old browsers - there are fallbacks and polyfills I could use.
* I appreciate that, using mobx + rxjs + react for an app this simple is overkill.  I wanted to build something with a properlu thought-out achitecture to make it easer to add extra features, as I understand I will be doing that if I get through to the interview
* For the detail page I am  making a request for data I already have as there is just mock json data available.  I have done it this way as, if this was a real app, it is likely that there would be more data returned from this endpoint, such as the recipe instructions.
* Also, the app attempts to refresh the data on every single page load.  The api returns a 304 Not Modified so brower cache is used, but this could be improved so that the request is not even made
* There's an obvious lack of tests, particuarly for the app.  I didn't have time to test everything, so I've written some tests for a broad range of different things so show my general approach
