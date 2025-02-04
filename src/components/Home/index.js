import React from 'react'


import './index.css'

const Home = () => {
  return (
    <section id='home'>
      <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className='carousal-text-container'>
            <h1 className='home-heading'>Highest Quality Packaging Solutions</h1>
            <p className='home-description'>Lorem Ipsum is Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <button className='carousal-btn'>ReadMore..</button>
          </div>
        </div>
        <div class="carousel-item">
          <div className='carousal-text-container'>
            <h1 className='home-heading'>Highest Quality Packaging Solutions</h1>
            <p className='home-description'>Lorem Ipsum is Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <button className='carousal-btn'>ReadMore..</button>
          </div>
        </div>
        <div class="carousel-item">
          <div className='carousal-text-container'>
            <h1 className='home-heading'>Highest Quality Packaging Solutions</h1>
            <p className='home-description'>Lorem Ipsum is Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <button className='carousal-btn'>ReadMore..</button>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </section>
  )
}

export default Home
