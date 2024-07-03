import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './hover.css'
import { Contenedor1 } from './containers/Contenedor1'
import { Contenedor2 } from './containers/Contenedor2'
import { Contenedor3 } from './containers/Contenedor3'
import { Contenedor4 } from './containers/Contenedor4'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contenedor1 />
    <Contenedor2 />
    <Contenedor3 />
    <Contenedor4 />
  </React.StrictMode>,
)
