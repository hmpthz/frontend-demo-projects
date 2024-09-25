import React from 'react'
import './Feature.css'

interface FeatureProps {
  title: string,
  text: string
}

function Feature({ title, text }: FeatureProps) {
  return (
    <article className='feature-container'>
      <div className='feature-container__title'>
        <div className='feature-container__title-bar' />
        <h1>{title}</h1>
      </div>
      <p className='feature-container__text'>{text}</p>
    </article>
  )
}

export default Feature