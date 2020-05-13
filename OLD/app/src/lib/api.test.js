import {
    fetchRecipeList,
    fetchRecipe,
} from './api';
import config from '../config/config';
import fetchMock from 'fetch-mock';
import data from '../../../api/data/recipes.json';

beforeAll(() => {
    process.env.API_PORT = 8181;
});

afterEach(() => {
    fetchMock.restore();
});

test('it should be able to fetch a list of recipes', async () => {
    const url = `${config.apiHost}/recipes`;
    fetchMock.mock(url, data);
    const recipes = await fetchRecipeList().toPromise();
    expect(recipes).toEqual(data);
});

test('it should be able to fetch a single recipe', async () => {
    const url = `${config.apiHost}/recipes/lemon-chicken`;
    const stubData = data.recipes[0];
    fetchMock.mock(url, stubData);
    const recipe = await fetchRecipe('lemon-chicken').toPromise();
    expect(recipe).toEqual(stubData);
});

test('it should retry if it  gets a non-ok response', async () => {
    expect.assertions(1);
    const url = `${config.apiHost}/recipes`;
    fetchMock.mock(url, 500);
    try {
        await fetchRecipeList().toPromise();
    } catch (e) {
        expect(fetchMock.calls().length).toBe(3);
    }
});

test('it should throw an error after 3 attempts', async () => {
    expect.assertions(1);
    const url = `${config.apiHost}/recipes`;
    const status = 500;
    fetchMock.mock(url, status);
    try {
        await fetchRecipeList().toPromise();
    } catch (e) {
        expect(e.message).toBe(`Fetch Error.  Recieved ${status} from ${url}`);
    }
});