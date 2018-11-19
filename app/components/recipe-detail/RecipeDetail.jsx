import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 80px auto;
    grid-template-areas: 
        "header header"
        "...... text";
    background-size: cover;
    height: 90vh;
`;

const Header = styled.h1`
    font-size: 2em;
    color: #00536C;
    grid-area: header;
    background-color: rgba(255,255,255,0.8);
    margin: 0;
    padding: 0.5em;
`;

const Text = styled.div`
   grid-area: text;
   background-color: rgba(255,255,255,0.8);
   padding: 0.5em;
`;

const RecipeText = ({cookingTime, ingredients}) => (
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
            <React.Fragment>
                <Layout style={{backgroundImage:bgImage}}>
                    <Header>{name}</Header>
                <Text>
                    <RecipeText cookingTime={cookingTime} ingredients={ingredients} />
                </Text>
                </Layout>
            </React.Fragment>
        )
    }
}