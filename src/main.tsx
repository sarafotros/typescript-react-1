import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App2 from './App2'
import App1 from './App1'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App/> */}
    <App1/>
    {/* <App2/> */}
  </React.StrictMode>,
)
