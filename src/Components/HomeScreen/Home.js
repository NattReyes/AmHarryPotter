import React, { useState, useEffect } from 'react';
import getProducts from"../APIrequest/AllDataAPI";
import axios from "axios";
import harry from '../img/harry.png';
import NavBar from "../NavBar/NavBar";
import getBackgroundColor from "../Characters/backgroundCard";
import '../stylesHP/card.scss';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function Home(){
    const[characters,setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    const api= "http://localhost:5000/characters"
    async function filterStudents (value){
        return await axios.get(`${api}?hogwartsStudent=${value}`)
        .then((response)=>{
        setProducts(response.data);
    })
    .catch((err)=> console.log(err));
};

    return(
        <div className="main-background">
             <NavBar/>
            <img className="main-logo" src={harry} alt="logo"/>
            <span className="filter-label">Selecciona tu Filtro</span>
            <div className="button-div">
                <button className="btn btn-filter" onClick={()=> filterStudents('true')}>ESTUDIANTES</button>
                <button className="btn btn-filter" onClick={()=> filterStudents('false')}>STAFF</button>
            </div>
            <div className='card-container'>
        {characters.map((character) => (
           <div>
                <div key={character.name}>
                <div className={character.alive ? "card" : "card-dead"}>
                <div className="card-photo-div" style={{background: getBackgroundColor(character.house.toUpperCase())}}>
                <img className="card-photo-img" src={character.image} alt="integrante"/>
            </div>
            <div className="card-info-div">
                <div className="card-info-type">
                        {character.alive ? "VIVO " : "FINADO "}
                        /
                        {character.hogwartsStudent ? " ESTUDIANTE"
                        :" STAFF"}
                    <BookmarkBorderIcon className="bookmark-icon"/>
                </div>
                <p className="card-info-header">{
                character.name.length>24 ? 
                character.name.substring(0,22)
                :character.name}
                </p>
                <div className="card-data-div">
                    <span className="data-label"><strong>{"Cumpleaños "}</strong>{character.dateOfBirth}</span>
                    <span className="data-label"><strong>{"Género "}</strong>{character.gender}</span>
                    <span className="data-label"><strong>{"Color de ojos "}</strong>{character.eyeColour}</span>
                    <span className="data-label"><strong>{"Color de pelo "}</strong>{character.hairColour}</span>
                </div>
            </div>
        </div>
            </div>
            </div>
            )
         )} 
    </div>
        </div>
    )
}
