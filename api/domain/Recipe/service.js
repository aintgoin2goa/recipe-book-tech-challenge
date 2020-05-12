const RecipeRepository = require('./repository');

const getAllRecipes = () => {
	return RecipeRepository.all();
}

const getRecipe = (id) => {
	return RecipeRepository.get(id);
}

module.exports = {
	getAllRecipes,
	getRecipe
}