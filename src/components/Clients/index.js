import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const Clients = () => {
    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
  return (
    <section id='clients'>
      <h1 className='clients-heading'>Our Clients</h1>
      <div className='slider-container'>
        <Slider {...settings}>
            <div className='client-card'>
                <img src='' alt=''/>
                <h3>Dr.Reddy's</h3>
            </div>
            <div className='client-card'>
                <img src='' alt=''/>
                <h3>HETERO</h3>
            </div>
            <div className='client-card'>
                <img src='' alt=''/>
                <h3>BIOTECH</h3>
            </div>
            <div className='client-card'>
                <img src='' alt=''/>
                <h3>BIOCOIN</h3>
            </div>
        </Slider>
      </div>
    </section>
  )
}

export default Clients
