import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import {
    TEXT_COLOR,
    HEADING_COLOR,
    HIGHLIGHT_COLOR,
    TEXT_BG,
    HEADING_BG,
    CARD_BG,
    CARD_LABEL_COLOR,
} from '../styles/colors';

import {
    DEFAULT_FONT,
    H1_SIZE,
    H2_SIZE,
    BASE_FONT_SIZE,
} from '../styles/typography';

import {
    TEXT_PADDING,
    LIST_SPACING,
} from '../styles/measurements';

export const Body = createGlobalStyle`
    html, body{
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${DEFAULT_FONT};
        font-size: ${BASE_FONT_SIZE};
        color: ${TEXT_COLOR};
    }
`;

export const Title = styled.h1`
    font-size: ${H1_SIZE};
    color: ${HEADING_COLOR};
    background-color: ${HEADING_BG};
    margin: 0;
    padding: ${TEXT_PADDING};
`;

export const H2 = styled.h2`
    font-size: ${H2_SIZE};
    margin: 0;
`;

export const SummaryText = styled.p`
    margin: 0;
`;

export const NoRecipesText = styled.p`
    font-size: ${H1_SIZE};
    color: ${HIGHLIGHT_COLOR};
    padding: ${TEXT_PADDING};
`;

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: ${LIST_SPACING};
    margin: ${LIST_SPACING};

    @media only screen and (min-width:600px) {
        grid-template-columns: auto auto auto;
    }

    @media only screen and (min-width: 1600px) {
        grid-template-columns: auto auto auto auto;
    }
`;

export const Card = styled.div`
    box-shadow: 10px 10px 23px -6px rgba(0,0,0,0.75);
    box-sizing: border-box;
    background-color: ${CARD_BG};
    background-size: cover;
    height: 200px;
    position:relative;
    transition: opacity 250ms linear;
    opacity: 1;

    &:hover {
        opacity: 0.8;
    }
`;

export const StyledLink = styled(Link)`
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-decoration: none;
`;

export const Label = styled.span`
    box-sizing: border-box;
    padding: 1em;
    width: 100%;
    background-color: ${TEXT_BG};
    position:absolute;
    left: 0;
    bottom: 0;
    color: ${CARD_LABEL_COLOR};
`;

export const RecipeDetailLayout = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 80px auto;
    grid-template-areas: 
        "header header"
        "...... text";
    background-size: cover;
    height: 90vh;
`;

export const RecipeHeader = styled.h1`
    font-size: 2em;
    color: ${TEXT_COLOR};
    grid-area: header;
    background-color: ${TEXT_BG};
    margin: 0;
    padding: ${TEXT_PADDING};
`;

export const RecipeText = styled.div`
   grid-area: text;
   background-color: ${TEXT_BG};
   padding: ${TEXT_PADDING};
`;