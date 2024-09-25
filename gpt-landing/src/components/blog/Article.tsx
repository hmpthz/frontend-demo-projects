import React from 'react'
import './Article.css'

interface ArticleProps {
  img: string,
  date: string,
  title: string
}

function Article({ img, date, title }: ArticleProps) {
  return (
    <article className='blog-container__article'>
      <div className='blog-container__article-image'>
        <img src={img} alt={title} />
      </div>
      <div className='blog-container__article-content'>
        <div className=''>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </article>
  )
}

export { Article, type ArticleProps };