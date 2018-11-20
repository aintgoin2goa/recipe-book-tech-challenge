const { expect } = require('chai');

const data = require('../data/recipes.json');
const RecipeModel = require('./recipe-model');
const IngredientsModel = require('./ingredients-model');

describe('RecipeModel', () => {
    it('should create a new model from data', () => {
       const item = data.recipes[0];
       const model = new RecipeModel(item);
       const props = new Map([
           ['id', 'id'],
           ['name', 'name'],
           ['image', 'imageUrl'],
           ['cookingTime', 'cookingTime'],
       ]);
       for([modelName, dataName] of props){
           expect(model[modelName]).to.equal(item[dataName]);
       }
       expect(model.ingredients).to.be.an.instanceOf(IngredientsModel)
    });

    it('should convert back to a plain object for transmitting to json', () => {
        const item = data.recipes[0];
        const model = new RecipeModel(item);
        const json = model.toJSON();
        const expected = {
            id: model.id,
            name: model.name,
            image: model.image,
            cookingTime: model.cookingTime,
            ingredients: [
                {
                    "ingredient": "Chicken Breasts",
                    "measurement": " x",
                    "quantity": 4
                },
                {
                    "ingredient": "Lemon",
                    "measurement": " x",
                    "quantity": 1
                },
                {
                    "ingredient": "Thyme",
                    "measurement": " tsp",
                    "quantity": 1
                }
            ]
        }
        expect(json).to.deep.equal(expected);
    });
});
