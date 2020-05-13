const Collection = require('../Collection');
const Ingredient = require('../Ingredient/entity');

const Recipe = {
	__name: 'Recipe',
	id: '',
	name: '',
	image: '',
	cookingTime: '',
	ingredients: Collection(Ingredient)
}

export default () => Object.create(Recipe).seal();