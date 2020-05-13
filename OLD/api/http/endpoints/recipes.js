const RecipesService = require('../../domain/Recipe/service');

module.exports = (app) => {
	app.get('/recipes', async (req, res) => {
		const recipes = await RecipesService.getAllRecipes();
		res.json({recipes});
	});
	app.get('/recipes/:id', async (req, req) => {
		const id = req.params.id;
		const recipe = await RecipesService.getRecipe(id);
		res.json({recipe});
	});
};