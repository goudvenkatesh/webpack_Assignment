import React from 'react'
import {Link} from 'react-scroll'
import './index.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src='https://img.freepik.com/free-vector/luxury-logo-gradient-design-illustration_483537-1038.jpg?uid=R79145184&ga=GA1.1.829025863.1738515082&semt=ais_hybrid'
      alt='' className='logo'/>
      <div className='menu-items'>
        <Link activeClass='active' to="home" spy={true} smooth={true} offset={-130} duration={500} className='menu-item' style={{ textDecoration: "none"}}>HOME</Link>
        <Link activeClass='active' to="about" spy={true} smooth={true} offset={-100} duration={500} className='menu-item' style={{ textDecoration: "none"}}>ABOUT US</Link>
        <Link activeClass='active' to="products" spy={true} smooth={true} offset={-100} duration={500} className='menu-item' style={{ textDecoration: "none"}}>PRODUCTS</Link>
        <Link activeClass='active' to="clients" spy={true} smooth={true} offset={-100} duration={500} className='menu-item' style={{ textDecoration: "none"}}>CLIENTS</Link>
        <Link activeClass='active' to="Home" spy={true} smooth={true} offset={-100} duration={500} className='menu-item' style={{ textDecoration: "none"}}>CONTACT US</Link>
      </div>
    </nav>
  )
}

export default Navbar
