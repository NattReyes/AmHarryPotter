//import React from "react";
//import BookmarkIcon from '@mui/icons-material/Bookmark';
//import '../stylesHP/card.scss';



export default function CardCharacters({character}){


    return(
        <div >
           <img src={character.image} alt='personaje'/> 
           
            <h3>{character.name}</h3>
            </div>
    )
}

/*

const griffindorBackground= "linear-gradient(135deg, #FF0000 0%, #FED482 100%)";
const slytherinBackground=  "linear-gradient(135deg, #1C792B 0%, #82E95E 100%)";
const ravenclawBackground=  "linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)";
const hufflepuffBackground= "linear-gradient(135deg, #FFC700 0%, #FFF388 100%)";

 function getBackgroundColor(house){
        let color=""
        switch(house){
            case 'GRYFFINDOR':
                color=griffindorBackground;
                break;
            case 'SLYTHERIN':
                color=slytherinBackground;
                break;
            case 'RAVENCLAW':
                color=ravenclawBackground;
                break;
            case 'HUFFLEPUFF':
                color=hufflepuffBackground;
                break;
            default:
                color=griffindorBackground;
                break;
        }
        return color;
    }

<div className="card-photo-div" style={{background: getBackgroundColor(character.house.toUpperCase())}}>
<img className="card-photo-img" src={character.image} alt="integrante"/>
</div>
<div className="card-info-div">
<div className="card-info-type">
      <BookmarkIcon className="bookmark-icon-selected"/>
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

*/