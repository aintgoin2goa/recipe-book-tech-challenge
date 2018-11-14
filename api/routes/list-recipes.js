const RecipeModel = require('../models/recipe-model');

const listRecipes = (req, res) => {
    const recipes = RecipeModel.all();
    const jsonData = recipes.map(r => r.toJSON());
    res.json(jsonData);
}

module.exports = listRecipes;
