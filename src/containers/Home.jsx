import './Home.css'
import { Menu } from '../components/Menu'
export function Home(){
    return(
        <div className="contenedor1" id='home'>
            <Menu/>
            <main>
                <h1>We help startups launch their produts</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem esse fugiat laudantium exercitationem fuga, ducimus nobis dolore, corrupti eius, cum quo? Praesentium nulla enim, explicabo facere aliquam necessitatibus sunt!</p>
            </main>
        </div>
    )
}