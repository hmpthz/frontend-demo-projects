import React from 'react'
import { assets } from '../../assets'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer section__padding'>
      <h1 className='footer-heading gradient__text'>Do you want to step in to the future before others</h1>

      <button type='button' className="footer-btn">
        Request Early Access
      </button>

      <div className="footer-links">
        <div className="footer-links__logo">
          <img src={assets.logoSVG} alt="gpt3_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links__div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <p className="footer-copyright">
        @{new Date().getFullYear()} GPT-3. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer