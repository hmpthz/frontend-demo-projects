import React from 'react'
import './Brand.css'
import { assets } from '../../assets'

const logos: { img:string, alt:string }[] = [
  { img:assets.google, alt:'google' },
  { img:assets.slack, alt:'slack' },
  { img:assets.atlassian, alt:'atlassian' },
  { img:assets.dropbox, alt:'dropbox' },
  { img:assets.shopify, alt:'shopify' },
]

function Brand() {
  return (
    <div className='brand section__padding'>
      {logos.map(item => (
        <div><img src={item.img} alt={item.alt} /></div>
      ))}
    </div>
  )
}

export default Brand