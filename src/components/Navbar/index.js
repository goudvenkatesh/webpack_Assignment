import React from 'react'
import {Link} from 'react-scroll'
import './index.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src='https://media.licdn.com/dms/image/v2/C560BAQFp8ZBY_-P05A/company-logo_200_200/company-logo_200_200/0/1637757614009/aakruti_solutions_logo?e=2147483647&v=beta&t=s7I5HHoK_8MOaZrUUZg76uwfFcpN3a-JvLZe4ZYT1UY'
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
