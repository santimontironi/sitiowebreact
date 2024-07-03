import './skill-estilos.css'
export function Skill({titulo,progreso}){
    return(
        <div className="skill">
            {titulo}
            {progreso}
        </div>
    )
}