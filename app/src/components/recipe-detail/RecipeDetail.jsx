import React from 'react';
import { observer, inject } from 'mobx-react';

import RecipeTextContent from './RecipeTextContent';

import {
    RecipeDetailLayout,
    RecipeText,
    RecipeHeader
} from '../primitives';

const RecipeNotFound = () => {
    const message = "Sorry, this recipe doesn't exist or may have been removed";
    return (
        <RecipeDetailLayout>
            <RecipeHeader>{message}</RecipeHeader>
        </RecipeDetailLayout>
    )
}


@inject('recipe', 'router')
@observer
export default class RecipeDetail extends React.Component {
    componentWillMount() {
        const id = this.props.match.params.id
        if (id && id !== this.props.recipe.id) {
            this.props.recipe.fetchRecipe(id);
        }
    }

    render() {
        const {
            name,
            image,
            cookingTime,
            ingredients,
        } = this.props.recipe;


        if (!this.props.recipe.id) {
            return (
                <RecipeNotFound />
            )
        }
       
        const bgImage = `url('${image}')`;

        return (
            <RecipeDetailLayout style={{backgroundImage:bgImage}}>
                <RecipeHeader>{name}</RecipeHeader>
                <RecipeText>
                    <RecipeTextContent cookingTime={cookingTime} ingredients={ingredients} />
                </RecipeText>
            </RecipeDetailLayout>
        )
    }
}