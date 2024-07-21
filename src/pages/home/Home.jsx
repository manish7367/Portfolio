import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import{FaArrowRight} from 'react-icons/fa'
import"./home.css"

const Home = () => {
  return (
   <section className="home section grid">
    <img src={Profile} alt="" className="home__img" />
    <div className='home__content'>
      <div className='home__data'>
        <h1 className='home__title'>
          <span>I'm Manish Kumar.</span>Full Stack Developer
        </h1>
        <p className='home__description'>
          I'm a Indian proficient Full Stack Developer, I specialize in creating seamless, user-centric web applications. With expertise in both front-end and back-end technologies, I build robust solutions that enhance user experiences and drive business growth. My skill set includes HTML, CSS, JavaScript, React, Node.js, and database management. I am dedicated to continuous learning and staying updated with industry trends to deliver cutting-edge solutions.
        </p>
        <Link to="/about" className='button'>
        More About Me{''}
        <span className='button__icon'><FaArrowRight/></span>
        </Link>
      </div>
    </div>

    <div className="color__block"></div>
   </section>
  )
}

export default Home