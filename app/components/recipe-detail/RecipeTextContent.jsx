import React from 'react';

const Ingredient = ({ingredient, quantity, measurement}) => (
    <li>{quantity}{measurement} {ingredient}</li>
)

const Ingredients = ({ingredients}) => {
    return ingredients.map((ingredient, index) => {
        return (
            <Ingredient key={index} {...ingredient} />
        )
    })
}

const RecipeTextContent = ({cookingTime, ingredients}) => (
    <React.Fragment>
        <p><b>Cooking Time: </b>{cookingTime}</p>
        <h4>Ingredients</h4>
        <ul>
            <Ingredients ingredients={ingredients} />
        </ul>
    </React.Fragment>
)

export default RecipeTextContent;