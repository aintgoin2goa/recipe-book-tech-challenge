import { observable, action } from 'mobx';

import { fetchRecipeList } from '../lib/api';

const notInList = ids => recipe => !(ids.includes(recipe.id));

export default class RecipeList {
    @observable recipes = [];

    @action.bound
    fetchRecipes() {
        const ids = this.recipes.map(r => r.id);
        fetchRecipeList().subscribe(data => {
            data.recipes
                .filter(notInList(ids))
                .forEach(r => this.recipes.push(r))
        });
    }
}