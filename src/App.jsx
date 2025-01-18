import React from "react"
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Produto from "./Components/Produto/Produto"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Contato from "./Components/Contato/Contato"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='produto/:id' element={<Produto />} />
          <Route path='contato' element={<Contato />} />

        </Routes>
      </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
