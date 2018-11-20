import React from 'react';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components';

import RecipeSummary from '../recipe-summary/RecipeSummary';
import { ListContainer, NoRecipesText } from '../primitives';

const NoRecipes = () => (
    <NoRecipesText>
        Sorry, we currently have no recipes for you
    </NoRecipesText>
)


@inject('recipeList','recipe', 'router')
@observer
export default class RecipeList extends React.Component {
    componentDidMount(){
        this.props.recipeList.fetchRecipes();
    }

    render() {
        const recipes = this.props.recipeList.recipes;
        if (!recipes.length) {
            return (
                <ListContainer>
                    <NoRecipes />
                </ListContainer>
            )
        } else {
            return (
            <ListContainer>
                {this.props.recipeList.recipes.map(r => <RecipeSummary key={r.id} {...r} />)}
            </ListContainer>
        )
        }
        
    }
}