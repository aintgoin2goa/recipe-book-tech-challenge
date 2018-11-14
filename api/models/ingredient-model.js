
class IngredientsModel {
    constructor(ingredients) {
        this.ingredients = ingredients;
    }

    toJSON() {
        return this.ingredients;
    }
}

module.exports = IngredientsModel;