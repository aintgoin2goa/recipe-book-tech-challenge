const Recipe = require('./entity');
const Collection = require('../Collection');
const {fetchAllRecipes, fetchRecipeById} = require('../../data/fetch-data');
const { mapRecipeToEntity } = require('./mappings');


const get = async (id) => {
	const data = await fetchRecipeById(id);
	if (!data) {
		throw new ReferenceError(`No recipe found with id ${id}`);
	}
	return mapRecipeToEntity(data);
}

const all = async () => {
	const data = await fetchAllRecipes();
	const mapped = data.recipes.map(mapRecipeToEntity);
	return Collection(Recipe(), mapped);
}

module.exports = {
	get,
	all
}
