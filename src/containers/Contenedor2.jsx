import './contenedor2-estilos.css'
import { Tarjeta } from '../components/Tarjeta'
export function Contenedor2(){
    return(
        <div className="contenedor2" id='services'>
            <section className="texto">
                <h1>Our services</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A animi nihil aut impedit nulla culpa amet, magni commodi accusamus suscipit neque qui excepturi corrupti eius provident harum distinctio, facere reiciendis?</p>
            </section>
            <div className='separador'></div>
            <section className="contenedor-tarjetas">
                <div className="tarjetas-superiores">
                    <Tarjeta 
                        icono = {<i className='bx bx-diamond'></i>} 
                        titulo = {<h1>Beautiful web sites</h1>}
                        parrafo = {<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas unde ea, debitis veniam id, harum dolore corrupti omnis necessitatibus et amet.</p>}>
                    </Tarjeta>
                
                    <Tarjeta
                        icono = {<i className='bx bx-data'></i>} 
                        titulo = {<h1>Database</h1>} 
                        parrafo = {<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sed minus maiores iusto impedit cupiditate delectus, quis velit doloremque nihil.</p>}>
                    </Tarjeta>
                    
                    <Tarjeta 
                        icono = {<i className='bx bx-map'></i>} 
                        titulo = {<h1>Using maps</h1>} 
                        parrafo = {<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae sint reprehenderit consequuntur reiciendis dolor maxime ex, fugiat debitis distinctio facilis..</p>}>
                    </Tarjeta>
                </div>
                <div className="tarjetas-inferiores">
                    <Tarjeta 
                        icono = {<i className='bx bx-cart' ></i>} 
                        titulo = {<h1>Online Shops</h1>} 
                        parrafo = {<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint facere nisi provident beatae molestias a qui numquam amet necessitatibus natus? Mollitia commodi error quibusdam obcaecati in corrupti odit minus eos?</p>}>
                    </Tarjeta>
                    
                    <Tarjeta 
                        icono = {<i className='bx bx-wrench'></i>} 
                        titulo = {<h1>Maintenance</h1>} 
                        parrafo = {<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus vitae fugiat officia veniam, rerum sequi sit nisi nobis fuga perspiciatis quisquam dolorum, voluptas praesentium.</p>}>
                    </Tarjeta>
                    
                    <Tarjeta 
                        icono = {<i className='bx bxs-envelope'></i>} 
                        titulo = {<h1>Send mails</h1>} 
                        parrafo = {<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero consectetur cumque ullam? Similique mollitia quo et totam ea blanditiis voluptate natus voluptatem.</p>}>
                    </Tarjeta> 
                </div>
            </section>
        </div>
    )
}