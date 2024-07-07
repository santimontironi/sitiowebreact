import './menu-estilos.css'
import { useState } from 'react'
export function Menu(){

    const [abrirMenu,setAbrirMenu] = useState(false);

    //Funciona para alternar el menu abierto y cerrado a la hora de ser responsive nuestro sitio web.
    function verMenu(){
        setAbrirMenu(!abrirMenu);
    }

    //Con esta funcion lo que estamos haciendo es un scroll de manera rapida hasta la seccion que se quiera recorrer,donde esta se captura mediante su ID.
    function scrollToSection(id){
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior: 'smooth'})
            setAbrirMenu(false)
        }
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
                    <li><a className='hvr-underline-from-center' onClick={() => scrollToSection('home')}>Home</a></li>
                    <li><a className='hvr-underline-from-center' onClick={() => scrollToSection('services')}>Services</a></li>
                    <li><a className='hvr-underline-from-center' onClick={() => scrollToSection('aboutUs')}>About us</a></li>
                    <li><a className='hvr-underline-from-center' onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>
            </nav>
        </header> 
    )
}