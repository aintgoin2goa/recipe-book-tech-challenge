import React from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router, browserHistory } from 'react-router-dom';

import RecipeList from './recipe-list/RecipeList';
import RecipeDetail from './recipe-detail/RecipeDetail';
import { Title, Body } from './primitives';


export default class App extends React.Component {
    render(){
        return (
            <Router>
                <React.Fragment>
                    <Body />
                    <Title>Recipe Book</Title>
                    <Route path="/" exact component={RecipeList} />
                    <Route path="/recipe/:id" component={RecipeDetail} />
                </React.Fragment>
            </Router>
        )
    }
}