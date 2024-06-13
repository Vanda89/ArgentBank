import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  )
}

export default App
