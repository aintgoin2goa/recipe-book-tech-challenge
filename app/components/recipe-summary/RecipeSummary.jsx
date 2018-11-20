import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Card, StyledLink, Label, H2, SummaryText } from '../primitives';

const RecipeSummary =  ({
    id,
    name,
    cookingTime,
    ingredients,
    image,
}) => {
    const bgImage = `url('${image}')`;
    const url = `recipe/${id}`;
    return (
        <Card style={{backgroundImage: bgImage}}>
            <StyledLink to={url}>
                <Label>
                    <H2>{name}</H2>
                    <SummaryText>
                        🕐 {cookingTime} <br />
                        {ingredients.map(i => i.ingredient).join(', ')}
                    </SummaryText>
                </Label>
            </StyledLink>
        </Card>
    )
};

export default RecipeSummary;
