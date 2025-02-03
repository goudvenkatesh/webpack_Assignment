import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import './index.css'

const About = () => {
  return (
    <section id='about'>
        <div className='text-container'>
          <div className='heading-underline'>
            <h1 className='heading'>About us</h1>
            <div className='underline'></div>
          </div>
            <p>Lorem Ipsum is empty dummy text of the printing
            and typesetting industry Lorem Ipsum Lorem Ipsum
            is simply dumply text of the printing and typesetting industry
            Lorem Ipsum Lorem Ipsum
            is simply dumply text of the printing and typesetting industry
            </p>
            <button>Read More...<span><MdNavigateNext/></span></button>
        </div>
        <div className='img-container'>
        <img src='https://img.freepik.com/free-photo/close-up-side-view-engineer-architect-supervising-construction_23-2148233789.jpg?t=st=1738561139~exp=1738564739~hmac=dd5bb3ca0879185c818372edb5b3e6f50946f659acb2e00af35dd596d4e4f5e9&w=900'
         alt='working' className='about-img'/>
        </div>
    </section>
  )
}

export default About
