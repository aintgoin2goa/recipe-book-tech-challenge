const express = require('express');
const listRecipes = require('./routes/list-recipes');
const viewRecipe = require('./routes/view-recipe');


const app = express();
const port = Number(process.env.PORT || 8181);

app.get('/recipes', listRecipes);
app.get('/recipes/:id', viewRecipe);

app.listen(port);
console.log(`listening on port ${port}`);

