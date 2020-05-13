const RecipeNotFoundError = require('../domain/errors/RecipeNotFound');

module.exports = (app) => {
	app.get('*', (req, res, err) => {
		if (err instanceof RecipeNotFoundError) {
			res.status(404);
			res.json({error: err.message});
			return;
		}

		res.status(500);
		res.json({error: err.message});
	})
}