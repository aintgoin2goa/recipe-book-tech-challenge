import { observable, action, extendObservable } from 'mobx';
import { fetchRecipe } from '../lib/api';

export default class Recipe {
    @observable id = '';
    @observable name = '';
    @observable image = '';
    @observable ingredients = [];
    @observable cookingTime = '';

    @action.bound
    fetchRecipe(id) {
        fetchRecipe(id).subscribe(recipe => {
            Object.keys(recipe).forEach(k => this[k] = recipe[k]);
        });
    }
}