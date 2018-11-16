import React from 'react';
import styled from 'styled-components';

import RecipeList from './recipe-list/RecipeList';
import RecipeListStore from '../stores/recipe-list.store.js';

const recipeListStore = new RecipeListStore();

const Title = styled.h1`
    font-size: 28px;
    color: red;
    
`;

export default class App extends React.Component {
    componentDidMount(){
        recipeListStore.fetchRecipes();
    }

    render(){
        return (
            <React.Fragment>
            <Title>Recipe Book</Title>
            <RecipeList store={recipeListStore} />
            </React.Fragment>
        )
    }
}