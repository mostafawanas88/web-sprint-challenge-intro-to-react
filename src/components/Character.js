import React, { useState, useEffect } from "react";
import styled from "styled-components";


// this component will receive data through props from Characters component
// this compoenent will reach the actual data point through porps (props."xxx")
// depending on the data set, access through props will be amended 
// this component will utilize styled components to design how characters will be displayed
// styled to be used to determine how each character will be displayed 
// think if reactstrap is required for grids 

const StyledButtons = styled.button`
    display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 10rem;
    color: black;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .15rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color;
    border-radius: 10rem;
    z-index: -2;
    }
    &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken($color, 15%);
    transition: all .3s;
    border-radius: 10rem;
    z-index: -1;
    }
    &:hover {
    color: #fff;
    &:before {
        width: 100%;
    }
    }
`;

const StyledCharacter = styled.h2`
    font: bold italic 2em Georgia, Times, "Times New Roman", serif;
    border-bottom-width: 1px;
    border-bottom-style: dashed;
    border-bottom-color: black;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: black;
    margin: 0;
    padding: 0.5em 0 0.5em 0;
    font-size: 1em;
`;

const StyledType = styled.span`
    color: #ffffff
    position:relative;
    top:1px;
    display:inline-block;
    border-bottom:1px solid #AAA;
`;


const Character = (props) => {
    
    return (
        <div>
            <StyledButtons onClick={props.fetchDataBtn}>Display Rick and Morty Characters</StyledButtons>
            <StyledButtons onClick={props.hideDataBtn}>Hide Rick and Morty Characters</StyledButtons>
            {
                props.characterD.map((character) => (
                    <div>
                    <StyledCharacter>Character -- Name: {character.name}, <StyledType> Type: {character.species}</StyledType></StyledCharacter>
                    </div>
                ))
            }
        </div>
    )
}

export default Character;
