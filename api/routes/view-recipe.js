const RecipeModel = require('../models/recipe-model');

const viewRecipe = (req, res) => {
    const id = req.params.id;
    try {
        const recipe = RecipeModel.find(id);
        return res.json(recipe);
    }catch(e){
        console.error(e.message);
        return res.sendStatus(404);
    }
}    

module.exports = viewRecipe;