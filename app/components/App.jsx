import React from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router, browserHistory } from 'react-router-dom';

import RecipeList from './recipe-list/RecipeList';
import RecipeDetail from './recipe-detail/RecipeDetail';

const Title = styled.h1`
    font-size: 28px;
    color: red;
`;

export default class App extends React.Component {
    render(){
        return (
            <Router>
                <React.Fragment>
                    <Title>Recipe Book</Title>
                    <Route path="/" exact component={RecipeList} />
                    <Route path="/recipe/:id" component={RecipeDetail} />
                </React.Fragment>
            </Router>
        )
    }
}