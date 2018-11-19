import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Card, StyledLink, Label } from '../primitives';

const RecipeSummary =  ({
    id,
    name,
    image,
}) => {
    const bgImage = `url('${image}')`;
    const url = `recipe/${id}`;
    return (
        <Card style={{backgroundImage: bgImage}}>
            <StyledLink to={url}>
                <Label>{name}</Label>
            </StyledLink>
        </Card>
    )
};

export default RecipeSummary;
