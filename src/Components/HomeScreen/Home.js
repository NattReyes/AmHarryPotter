import harry from '../img/harry.png'
import NavBar from "../NavBar/NavBar";
export default function Home(){
  
    return(
        <div className="main-background">
             <NavBar/>
            <img className="main-logo" src={harry} alt="logo"/>
            <span className="filter-label">Selecciona tu Filtro</span>
            <div className="button-div">
                <button className="btn btn-filter" >ESTUDIANTES</button>
                <button className="btn btn-filter" >STAFF</button>
            </div>
        </div>
    )
}
