
class RecipeNotFoundError extends Error {
	constructor(message, id){
		super(message);
		Error.captureStackTrace(this, RecipeNotFoundError);
		this.id = id;
	}
}

module.exports = RecipeNotFoundError;