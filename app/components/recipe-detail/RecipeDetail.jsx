import React from 'react';
import { observer, inject } from 'mobx-react';

import {
    RecipeDetailLayout,
    RecipeText,
    RecipeHeader
} from '../primitives';

const RecipeTextContent = ({cookingTime, ingredients}) => (
    <React.Fragment>
        <p><b>Cooking Time: </b>{cookingTime}</p>
        <h4>Ingredients</h4>
        <ul>
            {ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
        </ul>
    </React.Fragment>
)

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