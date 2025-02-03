import React from 'react'
import './index.css'

const Products = () => {
  return (
    <section id='products'>
      <h1>What We do</h1>
      <p>Lorem Ipsum is Simply dummy text of the printing and typesetting industry.
        Lorem ipsum Lorem Ipsum is simply text of the prinating
      </p>
      <div className='images-container'>
        <div className='image-container'>
            <img src='https://img.freepik.com/free-photo/front-view-man-working-eco-friendly-wind-power-project-with-laptop-wind-turbines_23-2148847764.jpg?t=st=1738563858~exp=1738567458~hmac=cc46a7d5fb5b5bcd4942c1ee332f8c5940e7e0fe4b10c5856e561eff9ec6d10a&w=900'
            alt='' className='image'/>
            <label className='label-text'>Self-adhesive Labels</label>
        </div>
        <div className='image-container'>
            <img src='https://img.freepik.com/free-photo/close-up-hand-holding-tube_23-2148794458.jpg?t=st=1738574468~exp=1738578068~hmac=78e7e0a7e7ab8899495c564b35ef9bca02175680886b98d80809b29694f96bff&w=360'
            alt='' className='image'/>
            <label className='label-text'>Tamper evident labels</label>
        </div>
        <div className='image-container'>
            <img src='https://img.freepik.com/free-photo/male-pharmacist-working-drugstore_23-2150359211.jpg?uid=R79145184&ga=GA1.1.829025863.1738515082&semt=ais_hybrid'
            alt='' className='image'/>
            <label className='label-text'>VDP & 100% Inspection</label>
        </div>
      </div>
      <button className='button'>More..</button>
    </section>
  )
}

export default Products
