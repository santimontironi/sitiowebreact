import './contenedor4-estilos.css'
import { Footer } from '../components/footer'
export function Contenedor4(){
    return(
        <div className="contenedor4" id='contact'>
            <div className="tituloContact">
                <h1>Contact us</h1>
            </div>
            <section className="mediosContacto">
                <div className="mapa">
                    <p><iframe id="map-canvas" class="map_part" width="600"  height="450"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=New York, Barclays&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://www.googlemapsgenerator.com">google maps embed</a> and <a href="https://gamstopcancel.com/">how to cancel gamstop</a></iframe></p>
                </div>
                <div className="formulario">
                    <form>
                        <input type="text" placeholder='Enter your name' required/>
                        <input type="email" placeholder='Enter your email' required/>
                        <textarea placeholder='Enter your message'></textarea>
                        <input type="submit" value="SEND MESSAGE"/>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    )
}