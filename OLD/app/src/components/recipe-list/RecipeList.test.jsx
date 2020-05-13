import renderer from 'react-test-renderer';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import RecipeList from './RecipeList';
import stubData from '../../../../api/data/recipes.json';
import { ListContainer } from '../primitives';


test('it should render a list of recipes', () => {
    const fetchRecipes = jest.fn();
    const props = {
        recipeList: {
            fetchRecipes,
            recipes: stubData.recipes.map(r => Object.assign({}, r, {image: r.imageUrl}))
        }
    }

    const tree = renderer.create(<MemoryRouter><RecipeList {...props}/></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it should show a message if there are no recipes', () => {
    const expectedMessage = 'Sorry, we currently have no recipes for you';
    const fetchRecipes = jest.fn();
    const props = {
        recipeList: {
            fetchRecipes,
            recipes: []
        }
    }

    const tree = renderer.create(<MemoryRouter><RecipeList {...props}/></MemoryRouter>).toJSON();
    const message = tree.children[0].children[0];
    expect(message).toEqual(expectedMessage);
});