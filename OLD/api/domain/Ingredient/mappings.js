const Ingredient = require('./entity');

const mapIngredientToEntity = (data) => {
	const entity = Ingredient();
	entity.ingredient = data.ingredient;
	entity.quantity = data.quantity;
	if (data.measurement) {
		entity.measurement = data.measurement;
	}

	return entity;
}

module.exports = {
	mapIngredientToEntity,
}