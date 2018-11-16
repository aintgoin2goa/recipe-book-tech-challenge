import React from 'react';
import {observer} from 'mobx-react';
import styled from 'styled-components';

import RecipeSummary from '../recipe-summary/RecipeSummary';

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    @media only screen and (min-width:600px) {
        grid-template-columns: auto auto auto;
    }

    @media only screen and (min-width: 1600px) {
        grid-template-columns: auto auto auto auto;
    }
`;

@observer
export default class RecipeList extends React.Component {
    render() {
        return (
            <ListContainer>
                {this.props.store.recipes.map(r => <RecipeSummary key={r.id} {...r} />)}
            </ListContainer>
        )
    }
}