const { expect } = require('chai');

const IngredientsModel = require('./ingredients-model');

const fakeIngredients = [
    {
        ingredient: 'Chicken',
        quantity: 1,
        measurement: ' breast'
    },
    {
        ingredient: 'Rice',
        quantity: 500,
        measurement: 'g'
    },
    {
        ingredient: 'Peas',
        quantity: 1,
        measurement: ' cup'
    }
]

describe('IngredientModel', () => {
    it('should create a new model given a list of ingredients', () => {
        const model = new IngredientsModel(fakeIngredients);
        expect(model.ingredients).to.deep.equal(fakeIngredients);
    });

    it('Should return the array of ingredients when converting to JSON', () => {
        const model = new IngredientsModel(fakeIngredients);
        const json = model.toJSON();
        expect(json).to.deep.equal(fakeIngredients);
    })
});
