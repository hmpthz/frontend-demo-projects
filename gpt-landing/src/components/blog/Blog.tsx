import React from 'react'
import './Blog.css'
import { Article, type ArticleProps } from './Article'
import { assets } from '../../assets'

const articles: ArticleProps[] = [
  { img: assets.blog01, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?' },
  { img: assets.blog02, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?' },
  { img: assets.blog03, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?' },
  { img: assets.blog04, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?' },
  { img: assets.blog05, date: 'Sep 26, 2021', title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?' }
]

function Blog() {
  return (
    <section id='blog' className='blog section__padding'>
      <h1 className='blog-heading gradient__text'>
        A lot is happening, We are blogging about it.
      </h1>
      <div className='blog-container'>
        {articles.map((item, index) => <Article key={index} {...item} />)}
      </div>
    </section>
  )
}

export default Blog