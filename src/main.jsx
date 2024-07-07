import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './hover.css'
import { Home } from './containers/Home';
import { Services } from './containers/Services'
import { About } from './containers/AboutUs'
import { Contact } from './containers/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Se renderizan cada uno de los componentees que serian los contenedores de nuestro sitio web.
  <React.StrictMode>
    <Home />
    <Services />
    <About />
    <Contact />
  </React.StrictMode>
)
