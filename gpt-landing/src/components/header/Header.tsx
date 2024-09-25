import React from 'react'
import './Header.css'
import { assets } from '../../assets'

function Header() {
  return (
    <section id='home' className='header section__padding'>
      <div className='header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>

        <p className=''>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>

        <div className='header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='header-content__people'>
          <img src={assets.people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='header__image'>
        <img src={assets.ai} alt='ai' />
      </div>
    </section>
  )
}

export default Header