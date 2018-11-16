import { observable } from 'mobx';

export default class Recipe {
    @observable id = '';
    @observable name = '';
    @observable image = '';
    @observable ingredients = [];
    @observable cookingTime = '';
}