import React from 'react';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components';

import RecipeSummary from '../recipe-summary/RecipeSummary';
import { ListContainer } from '../primitives';


@inject('recipeList','recipe', 'router')
@observer
export default class RecipeList extends React.Component {
    componentDidMount(){
        this.props.recipeList.fetchRecipes();
    }

    render() {
        return (
            <ListContainer>
                {this.props.recipeList.recipes.map(r => <RecipeSummary key={r.id} {...r} />)}
            </ListContainer>
        )
    }
}