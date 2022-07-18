import harry from '../img/harry.png'
import NavBar from "../NavBar/NavBar";
export default function Home(){
  
    return(
        <div className="main-background">
             <NavBar/>
            <img className="main-logo" src={harry} alt="logo"/>
            <span className="filter-label">Selecciona tu Filtro</span>
        </div>
    )
}
