import './AboutUs.css'
import { Skill } from '../components/Skill'
import { Team } from '../components/Team'
import imagenOficina from '../assets/img/office.jpeg'
import team1 from '../assets/img/teamuno.jpg'
import team2 from '../assets/img/teamdos.jpg'
import team3 from '../assets/img/teamtres.jpg'

export function About(){
    return(
        <div className="contenedor3" id='aboutUs'>
            <div className="tituloAboutUs">
                <h1>About us</h1>
            </div>
            <div className="contenidoAboutUs">
                <section className="info">
                    <div className="imagen">
                        <img src={imagenOficina} alt="" />
                    </div>
                    <div className="us">
                        <h1>¿Who are we?</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellat laudantium, ullam officiis reiciendis necessitatibus ducimus assumenda aut eius, recusandae animi possimus nulla ex quasi! Optio cum exercitationem molestias facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem ab tenetur tempora totam, quibusdam distinctio beatae culpa ex. Nihil, ex itaque eveniet veniam quisquam rem adipisci harum id sit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque ea, dignissimos perspiciatis beatae itaque deleniti cupiditate est voluptatem dolor aperiam porro, quisquam ut laudantium placeat qui, numquam quaerat quis.</p>
                    </div>
                </section>
                <section className="skills-team">
                    <div className="skills">
                        <h1>Our skills</h1>
                        <Skill
                            titulo = {<p>Web design</p>}
                            progreso = {<progress max="100" value = "90"></progress>}>
                        </Skill>
                        <Skill
                            titulo = {<p>Storage database</p>}
                            progreso = {<progress max="100" value = "70"></progress>}>
                        </Skill>
                        <Skill
                            titulo = {<p>Domains and hosting</p>}
                            progreso = {<progress max="100" value = "80"></progress>}>
                        </Skill>
                        <Skill
                            titulo = {<p>Maintenance</p>}
                            progreso = {<progress max="100" value = "95"></progress>}>
                        </Skill>
                    </div>
                    <div className="team">
                        <h1>Our team</h1>
                        <div className="container-team">
                            <Team 
                                imagen={<img src={team3}></img>}
                                nombre={<p className='nombre'>Jhon Forster</p>}
                                puesto={<p className='puesto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, sapiente voluptate non nisi soluta quam.</p>}>
                            </Team>
                            <Team 
                                imagen={<img src={team2}></img>}
                                nombre={<p className='nombre'>Megan Carter</p>}
                                puesto={<p className='puesto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, sapiente voluptate non nisi soluta quam.</p>}>
                            </Team>
                            <Team 
                                imagen={<img src={team1}></img>}
                                nombre={<p className='nombre'>Julian Johnson</p>}
                                puesto={<p className='puesto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, sapiente voluptate non nisi soluta quam.</p>}>
                            </Team>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}