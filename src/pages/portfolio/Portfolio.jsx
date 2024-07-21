import React from 'react'
import { portfoli } from '../../data'
import PortfolioItem from '../../component/PortfolioItem'
import { FaGithub } from 'react-icons/fa'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio section">
        <h2 className='section__title'>My<span> Projects</span></h2>
        <div className='portfolio__container container grid'>
          {
          portfoli.map((item)=>{
            return <PortfolioItem key={item.id} {...item}/>
          })}
          <a href="https://github.com/manish7367" className="portfolio__social-link">
            <FaGithub className='icons'/>
          </a>
          </div>    
      </section>
    </div>
  )
}

export default Portfolio