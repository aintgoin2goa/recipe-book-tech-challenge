
const Ingredient = {
	__name: 'Ingredient',
	ingredient: '',
	quantity: 0,
	measurement: 'x'
};

export default () => Object.create(Ingredient).seal();