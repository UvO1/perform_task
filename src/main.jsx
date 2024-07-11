import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './components/main/main.jsx'
import { Header } from './components/header/header.jsx'
import { Footer } from './components/footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>
)
