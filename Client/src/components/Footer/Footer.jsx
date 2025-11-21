import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <Link to='/'> <img src={assets.logo_1} alt="" className='logo' /> </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum cumque qui eius corrupti. Debitis vel, sint fuga, suscipit magnam placeat alias necessitatibus consequuntur quam quibusdam totam. Provident, aliquam itaque?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2> Follow us to know more... </h2>
                <ul>
                    <li>+1-9876543212</li>
                    <li>Simply@simple.com</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2> COMPANY </h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Policies</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyrights">
            CopyRights 2.o from 2022  @Simple.com - All Rights Reserved. </p>
    </div>
  )
}

export default Footer