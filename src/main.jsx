import React from 'react'
import ReactDOM from 'react-dom/client'
import './hover.css'
import './index.css'
import { Home } from './containers/Home';
import { Services } from './containers/Services'
import { About } from './containers/AboutUs'
import { Contact } from './containers/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Services />
    <About />
    <Contact />
  </React.StrictMode>,
)
