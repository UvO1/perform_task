import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Main } from './components/main/main.jsx'
import { Header } from './components/header/header.jsx'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>
)
