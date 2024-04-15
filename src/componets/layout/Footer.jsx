import React from 'react'
import './Footer.css'
import logo from '../../assets/566b35c555201741bf0f962aed2b1ceb-removebg-preview.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer_items">
          <div className="footer_logo">
            <img src={logo} alt="logo" width={60}/>
          </div>
         
          <div className="icons">
          <FaFacebookF className='icon'/>
          <FaInstagramSquare className='icon'/>
          <FaTwitter className='icon'/>
          <FaLinkedinIn className='icon' />

          </div>
        </div>
      </div>
    </div>
  )
}
