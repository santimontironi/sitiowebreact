import './footer-estilos.css'
export function Footer(){
    return(
        <div className="footerContenedor">
            <footer>
                <div className="izquierda">
                    <h1>tecnoProducts</h1>
                    <a href="https://wa.me/3416459760?" className="whatsapp-button" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon"></img>
                    </a>
                    <i className='bx bx-x'></i>
                    <i className='bx bxl-instagram'></i>
                </div>
                <div className="centro">
                    <p>© All rights reserved. 2024.</p>
                </div>
                <div className="derecha">
                    <h1>Our media</h1>
                    <p><i className='bx bx-phone'></i>1234578910</p>
                    <p><i className='bx bx-map'></i>Barclay St NY 299</p>
                    <p><i className='bx bxl-gmail'></i>email@gmail.com</p>
                </div>
            </footer>
        </div>
    )
}