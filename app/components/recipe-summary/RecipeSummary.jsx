import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 10px 10px 23px -6px rgba(0,0,0,0.75);
    box-sizing: border-box;
    background-color: #b6ccf9;
    background-size: cover;
    height: 200px;
    position:relative;
    transition: opacity 250ms linear;
    opacity: 1;

    &:hover {
        opacity: 0.8;
    }
`;

const Link = styled.a`
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-decoration: none;
`;

const Label = styled.span`
    box-sizing: border-box;
    padding: 1em;
    width: 100%;
    background-color: rgba(255,255,255,0.8);
    font-size: 16px;
    position:absolute;
    left: 0;
    bottom: 0;
    color: black;
`;

const RecipeSummary =  ({
    id,
    name,
    image,
}) => {
    const bgImage = `url('${image}')`;
    const url = `/${id}`;
    return (
        <Card style={{backgroundImage: bgImage}}>
            <Link href={url}>
                <Label>{name}</Label>
            </Link>
        </Card>
    )
};

export default RecipeSummary;
