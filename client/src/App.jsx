import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import './main.css'

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

export default App
