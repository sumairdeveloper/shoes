import React from 'react'
import './HeroSection.css'
import img from '../../assets/logo.png'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <div className='text'>
        <h1 className="text1">SPRINGS,</h1>
        <h1 className="text2">SUMMER <img className='img' src={img}/></h1>

        </div>
     <div className="img-container">
      <div className="img-div">
        <img src={img1} />
      </div>
      <div className="img-div">
      <img src={img2} />
      </div>
   
</div>
<button className='btn'><GoArrowRight /></button>
    </div>
  )
}

export default HeroSection
