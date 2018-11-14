const data = require('../data/recipes.json');
const IngredientsModel = require('./ingredient-model');

class RecipeModel {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.image = data.imageUrl;
        this.ingredients = new IngredientsModel(data.ingredients);
        this.cookingTime = data.cookingTime;
    };

    static find(id) {
        const recipeData = data.recipes.find(r => r.id === id);
        if (!recipeData) {
            throw new Error(`Could not find recipe with id ${id}`);
        }

        return new RecipeModel(recipeData);
    }

    static all() {
        return data.recipes.map(r => new RecipeModel(r));
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            image: this.image,
            ingredients: this.ingredients.toJSON(),
            cookingTime: this.cookingTime,
        }
    }
}

module.exports = RecipeModel;