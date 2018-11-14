const { expect } = require('chai');

const IngredientModel = require('./ingredient-model');

describe('IngredientModel', () => {
    it('should create a new model given a list of ingredients', () => {
        const ingredients = ['Chicken', 'Rice', 'Peas'];
        const model = new IngredientModel(ingredients);
        expect(model.ingredients).to.deep.equal(ingredients);
    });

    it('Should return the array of ingredients when converting to JSON', () => {
        const ingredients = ['Chicken', 'Rice', 'Peas'];
        const model = new IngredientModel(ingredients);
        const json = model.toJSON();
        expect(json).to.deep.equal(ingredients);
    })
});
