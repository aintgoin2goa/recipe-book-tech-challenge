const RecipeModel = require('../models/recipe-model');

const viewRecipe = (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.sendStatus(400);
    }

    try {
        const recipe = RecipeModel.find(id);
        return res.json(recipe.toJSON());
    }catch(e){
        console.error(e);
        return res.sendStatus(404);
    }
}    

module.exports = viewRecipe;