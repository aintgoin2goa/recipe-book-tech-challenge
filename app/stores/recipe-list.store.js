import { observable, action } from 'mobx';

import { fetchRecipeList } from '../lib/api';

export default class RecipeList {
    @observable recipes = [];

    @action.bound
    fetchRecipes() {
        fetchRecipeList().subscribe(data => {
            data.recipes.forEach(r => this.recipes.push(r));
        })
    }
}