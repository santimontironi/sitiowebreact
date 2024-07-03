import './menu-estilos.css'
import { useState } from 'react'
export function Menu(){

    const [abrirMenu,setAbrirMenu] = useState(false);

    function verMenu(){
        setAbrirMenu(!abrirMenu);
    }

    return(
        <header>
            <div className="logo">
                <p>tecnoProducts</p>
            </div>
            <button className="btnAbrirMenu" onClick={verMenu}>
                <i className='bx bx-menu'></i>
            </button>
            <nav className={abrirMenu ? 'menuAbierto' : 'menuCerrado'}>
                <button className="btnCerrarMenu" onClick={verMenu}>
                    <i className='bx bx-x'></i>
                </button>
                <ul>
                    <li><a className='hvr-underline-from-center' href="/index.html">Home</a></li>
                    <li><a className='hvr-underline-from-center' href="#services">Services</a></li>
                    <li><a className='hvr-underline-from-center' href="#aboutUs">About us</a></li>
                    <li><a className='hvr-underline-from-center' href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header> 
    )
}