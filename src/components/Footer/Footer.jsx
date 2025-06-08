import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <div className="footer-logo-div">
                    <img src={assets.logo} alt="" />
                </div> */}
                <h1>Anteiku.</h1>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam ipsa totam. Saepe, voluptatem facilis. Voluptatum ipsum doloribus nemo sed nisi iste, quia a consectetur dicta vel magnam non excepturi!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@anteiku.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 &copy; Anteiku.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer