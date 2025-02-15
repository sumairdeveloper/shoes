import React from 'react'
import './Footer.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaArrowUp } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>


    <div className="email">
      
      <h3>SUBSCRIBE TO NEWSLETTER</h3>
      <MdOutlineEmail size={40}/>
  <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
     <input className='input-box' type="text" placeholder='Email Adress' / >
        </div>
        <div className="info">
          <h4>INFO</h4>
          <h1>FAQ</h1>
          <h1>RETURN</h1>
          <h1>CONTACT</h1>
          </div>

             <div className="info">
          <h4>POLICY</h4>
          <h1>TERM</h1>
          <h1>POLICY</h1>
          <h1>COKIE</h1>
          </div>

        <button className='btn1'><FaArrowUp />  </button>    
    </div> 


  )
}

export default Footer
