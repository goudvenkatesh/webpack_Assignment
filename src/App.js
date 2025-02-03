import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Clients from './components/Clients'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default App
