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
          <div className="footer_list">
            <ul>
              <li><a href="/"> Home </a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/book">Book</a></li>
            </ul>
          </div>
          {/* <div className="icons">
          <FaFacebookF />
          <FaInstagramSquare />
          <FaTwitter />
          <FaLinkedinIn />

          </div> */}
        </div>
      </div>
    </div>
  )
}
