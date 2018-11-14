const RecipeModel = require('../models/recipe-model');

const listRecipes = (req, res) => {
    const recipes = RecipeModel.all();
    res.json({recipes});
}

module.exports = listRecipes;
