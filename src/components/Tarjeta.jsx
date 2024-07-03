import './tarjeta-estilos.css'

export function Tarjeta(props){
    const {icono,titulo,parrafo} = props
    return(
        <div className="tarjeta">
            <div className="contenidoTarjeta">
                <div className="parteVisible">
                    {icono}
                    {titulo}
                </div>
                <div className="datosTarjeta">
                    {parrafo}
                </div>
            </div>
        </div>
    )
}