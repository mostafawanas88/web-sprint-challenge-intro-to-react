// Write your Character component here
import React, { useState, useEffect } from "react"
import styled from "styled-components";

const StyledButtons = styled.button`
    margin-top: 50px;
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
    border-bottom-color: black;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: black;
    margin: 0;
    padding: 0.5em 0 0.5em 0;
    font-size: 1em;`

var Character = (props) => {
    const {charactersD, fetchDataBtn, hideDataBtn} = props;
    return (
        <div>
            <StyledButtons onClick={fetchDataBtn}>Show Rick and Morty Characters</StyledButtons>
            <StyledButtons onClick={hideDataBtn}>Hide Rick and Morty Characters</StyledButtons>
            {
                charactersD.map((character, index) => (
                    <CharacterD key={index} characterInfo={character} />
                ))
            }
        </div>
                
    )
}

var CharacterD = (props) => {
    return (
        <div>
            <StyledCharacter>Character Name: {props.characterInfo.name}</StyledCharacter>
            <p>Character Species: {props.characterInfo.species}</p>
            <img src={props.characterInfo.image} alt="character image"/>
        </div>
    )
}

export default Character;