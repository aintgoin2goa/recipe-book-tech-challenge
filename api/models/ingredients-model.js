
class IngredientModel {
    constructor({ingredient, quantity, measurement}){
        this.ingredient = ingredient;
        this.quantity = quantity;
        this.measurement = measurement || ' x';
    }

    toJSON(){
        return {
            ingredient: this.ingredient,
            quantity: this.quantity,
            measurement: this.measurement
        }
    }
}

class IngredientsModel {
    constructor(ingredients) {
        this.ingredients = ingredients.map(i => new IngredientModel(i));
    }

    toJSON() {
        return this.ingredients.map(i => i.toJSON());
    }
}

module.exports = IngredientsModel;