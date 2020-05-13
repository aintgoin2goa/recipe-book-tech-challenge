import { when } from 'mobx';
import fetchMock from 'fetch-mock';
import stubData from '../../../api/data/recipes.json';

import RecipeListStore from './recipe-list.store';
import config from '../config/config';

afterEach(() => {
    fetchMock.restore();
});

const fixImage = r => Object.assign({}, r, {image: r.imageUrl}) // I wish I hadn't renamed this property now

test('it can fetch recipes', async () => {
    const data = {
        recipes: stubData.recipes.map(fixImage)
    }
    const url = `${config.apiHost}/recipes`;
    fetchMock.mock(url, data);

    const store = new RecipeListStore();
    store.fetchRecipes();
    await when(() => store.recipes.length > 0);
    expect(store.recipes).toEqual(data.recipes);
});

test('it will only add already new recipes to the list', async () => {
    const data = {
        recipes: stubData.recipes.map(fixImage) // I wish I hadn't renamed this property now
    }
    const newRecipe = {
        id: 'new-recipe',
        name: 'New Recipe',
        cookingTime: 'none',
        imageUrl: 'none',
        ingredients: [],
    }
    const dataWithNewRecipe = {
        recipes: stubData.recipes.concat([newRecipe]).map(fixImage)
    }
    const url = `${config.apiHost}/recipes`;
    fetchMock.mock(url, data);
    const store = new RecipeListStore();
    store.fetchRecipes();
    await when(() => store.recipes.length > 0);
    const length = store.recipes.length;
    fetchMock.mock(url, dataWithNewRecipe, {overwriteRoutes:true});
    store.fetchRecipes();
    await when(() => store.recipes.length > length);
    expect(store.recipes.length).toBe(length+1);
    expect(store.recipes[length].id).toEqual(newRecipe.id);
});

