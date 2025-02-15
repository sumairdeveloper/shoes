import React from 'react'
import img from '../../assets/logo.png'
import './Header.css'


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={img} /> 
        </div>
        <div className="list-items">
            <li>Home</li>
            <li>Shop</li>
            <li>Shoes Gallery</li>

            <li>Contact Us</li>
        </div>
     <button>Cart</button>

    </div>
  )
}

export default Header
