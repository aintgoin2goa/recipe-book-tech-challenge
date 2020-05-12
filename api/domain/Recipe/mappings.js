const Recipe = require('./entity');
const Ingredient = require('../Ingredient/entity');
const Collection = require('../Collection');
const { mapIngredientToEntity } = require('../Ingredient/mappings');

const mapRecipeToEntity = (data) => {
	const entity = Recipe();
	entity.id = data.id;
	entity.name = data.name;
	entity.image = data.imageUrl;
	entity.cookingTime = data.cookingTime;
	const ingredients = data.ingredients.map(mapIngredientToEntity);
	entity.ingredients = Collection(Ingredient(), ingredients);
	return entity;
}

module.exports = {
	mapRecipeToEntity,
}