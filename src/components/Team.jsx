import './team-estilos.css'

export function Team({imagen,nombre,puesto}){
    return(
        <div className="cardTeam">
            {imagen}
            {nombre}
            {puesto}
        </div>
    )
}