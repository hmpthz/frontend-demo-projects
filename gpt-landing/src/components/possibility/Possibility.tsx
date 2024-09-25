import React from 'react'
import './Possibility.css'
import { assets } from '../../assets'

function Possibility() {
  return (
    <section id='possibility' className='possibility section__padding'>
      <div className='possibility-image'>
        <img src={assets.possibility} alt='possibility' />
      </div>
      <div className='possibility-content'>
        <h4><a>Request Early Access to Get Started</a></h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4><a>Request Early Access to Get Started</a></h4>
      </div>
    </section>
  )
}

export default Possibility