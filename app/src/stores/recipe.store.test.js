import fetchMock from 'fetch-mock';
import { when } from 'mobx';

import RecipeStore from './recipe.store';
import stubData from '../../../api/data/recipes.json';
import config from '../config/config';

test('it can fetch a given recipe to hydrate the store', async() => {
    const data = stubData.recipes[0];
    data.image = data.imageUrl;
    const url = `${config.apiHost}/recipes/${data.id}`;
    fetchMock.mock(url, data);
    const store = new RecipeStore();
    store.fetchRecipe(data.id);
    await when(() => store.id !== '');
    expect(store.id).toBe(data.id);
    expect(store.name).toBe(data.name);
    expect(store.cookingTime).toBe(data.cookingTime);
    expect(store.image).toBe(data.imageUrl);
});