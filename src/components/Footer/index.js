import React from 'react'
import { PiFacebookLogo } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineLocationOn } from "react-icons/md";

import './index.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='top-section'>
        <div className='company-description'>
          <h1 className='webpack-heading'>WEBPACK</h1>
          <p className='description'>Lorem Ipsum is empty dummy text of the printing
            and typesetting industry Lorem Ipsum Lorem Ipsum
            is simply dumply text of the printing and typesetting industry
            Lorem Ipsum Lorem Ipsum
            is simply dumply text of the printing and typesetting industry
          </p>
        <div>
          <PiFacebookLogo className='icon'/>
          <CiInstagram className='icon'/>
          <CiTwitter className='icon'/>
          <CiLinkedin className='icon'/>
        </div>
      </div>

      <div className='company-links'>
        <h2 className='company-heading'>Company</h2>
        <div className='links-section'>
          <MdNavigateNext className='next-icon'/>
          <p className='link'>About us</p>
        </div>
        <div className='links-section'>
          <MdNavigateNext className='next-icon'/>
          <p className='link'>Products</p>
        </div>
        <div className='links-section'>
          <MdNavigateNext className='next-icon'/>
          <p className='link'>Clients</p>
        </div>
        <div className='links-section'>
          <MdNavigateNext className='next-icon'/>
          <p className='link'>Terms and Conditions</p>
        </div>
      </div>
      <div className='company-contact-details'>
        <h2 className='company-heading'>Get in touch</h2>
        <div className='contact-information'>
          <MdOutlinePhoneInTalk/>
          <p className='contact-details'>+91 8989898989</p>
        </div>
        <div className='contact-information'>
          <TfiEmail/>
          <p className='contact-details'>info@webpacklabels.com</p>
        </div>
        <div className='contact-information'>
          <MdOutlineLocationOn/>
          <p className='contact-details'>Plat No.150/3,S.V.Industrial Estate,<br/>
          I.D.A Bollaram,Jinnaram (M),<br/>
          Sangareddy (D), Hyderbad - 502325</p>
        </div>
      </div>
      </div>
      <div className='line'></div>
      <div className='copy-rights-container'>
        <p className='copy-heading'>Copy rights @ 2025 All rights reserved</p>
        <p className='copy-heading'>Designed by <span className='name'>Aakruti</span></p>
      </div>
    </footer>
  )
}

export default Footer
