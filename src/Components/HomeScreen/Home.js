import harry from '../img/harry.png'
export default function Home(){
  
    return(
        <div className="main-background">
            <img className="main-logo" src={harry} alt="logo"/>
            <span className="filter-label">Selecciona tu Filtro</span>
        </div>
    )
}
