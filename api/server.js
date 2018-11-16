const express = require('express');
const cors = require('cors');
const listRecipes = require('./routes/list-recipes');
const viewRecipe = require('./routes/view-recipe');


const app = express();
const port = Number(process.env.PORT || 8181);

app.use(cors());

app.get('/recipes', listRecipes);
app.get('/recipes/:id', viewRecipe);

app.listen(port);
console.log(`API Server listening on port ${port}`);

module.exports = app;

