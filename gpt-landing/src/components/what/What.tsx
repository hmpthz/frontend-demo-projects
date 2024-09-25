import React from 'react'
import Feature from '../feature/Feature'
import './What.css'

function What() {
  return (
    <section id='wgpt' className='what section__margin'>
      <div className='what-feature'>
        <Feature title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
        <p></p>
      </div>

      <div className='what-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p><a href=''>Explore The Library</a></p>
      </div>

      <div className='what-container'>
        <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
        <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
      </div>
    </section>
  )
}

export default What