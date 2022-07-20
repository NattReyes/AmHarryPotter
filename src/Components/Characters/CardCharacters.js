export default function CardCharacters({character}){


    return(
        <div >
           <img src={character.image} alt='personaje'/> 
           
            <h3>{character.name}</h3>
            </div>
    )
}