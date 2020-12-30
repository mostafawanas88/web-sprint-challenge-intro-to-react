import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character"

// this component will include state and useEffect
// this component will make the API calls
// this component will fetch the data 
// this component will pass the fetched data to Character component using props

const Characters = () => {
    const [characters, getCharacters] = useState([]);

    const fetchData = () => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response => getCharacters(response.data.results))
        .catch(err => console.log("Error, cannot fetch data!")); 
    };

    useEffect(()=>{
        fetchData();
    },[])

    const hideData = () => {
        getCharacters([]);
    }

    return (
        <div>
            <Character fetchDataBtn={fetchData} hideDataBtn ={hideData} 
            characterD={characters}/>
        </div>
    )
}

export default Characters;