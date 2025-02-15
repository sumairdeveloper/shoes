import React from 'react'
import './ShoesGallery.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import { GoArrowRight } from 'react-icons/go'
import img from '../../assets/logo.png'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'


const ShoesGallery = () => {
  return (
    <div className='shoes-gallery'>
        <div className="line">
            <h3>DEPLACE . SHOP DON'T . SCROLL . DEPLACE . SHOP DON'T . SCROLL.</h3>
        </div>
      
      <div className="up-text">
        <p>Who We Are</p>
        <h1>An independent <span>brand</span> of</h1>
        <h1>urban trekking and accessories </h1>
        <h1>that comes from a convergence of</h1>
        <h1>art and personalities.</h1>
      </div>

 <div className="img-container1">
      <div className="img-div1">
        <img src={img1} />
      </div>
      <div className="img-div1">
      <img src={img2} />
      </div>

      <div className="img-div1">
        <img src={img3} />
      </div>
      <div className="img-div1">
      <img src={img4} />
      </div>



    </div>
 
    <button className='btn'><GoArrowRight /></button>
   
   <div className="sign">
    <img src={img} />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laborum ut vitae sed distinctio doloremque ratione autem consectetur. Eum laborum voluptate possimus soluta quibusdam ipsum amet vel veritatis quasi. Mollitia?lo</p>
   </div>
   
   
   </div>

   

  )
}

export default ShoesGallery
