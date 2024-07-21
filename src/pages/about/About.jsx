import React from 'react'
import Info from '../../component/Info'
import Stats from '../../component/Stats'
import { FaDownload } from 'react-icons/fa'
import Resume_manish from'../../assets/Resume_Manish.pdf'
import Skill from '../../component/Skill'
import './about.css'
import { resume } from '../../data'
import ResumeItem from '../../component/ResumeItem'

const About = () => {
  return (
    <div className='container'>
      <div className="section__container">
        <section className='about'>
          <h2 className="section__title">
            About <span> Me</span>
          </h2>

          <div className="aboutContainer grid">
            <div className="about__info">
              <h3 className="section__subtitle">Personal Infos</h3>
              <ul className='info__list grid'>
                <Info/>
              </ul>
              <a href={Resume_manish} download=''className="button">
                Download Cv {''}
                <span className="button__icon">
                  <FaDownload/>
                </span>
              </a>
            </div>


            <div className="stats grid">
              <Stats/>
            </div>
          </div>
        </section>

        <div className="separator"></div>
        <section className="skills grid">
          <h3 className='section__subtitle subtitle__center'>My Skills</h3>

          <div className="skills__container grid">
            <Skill/>
          </div>
        </section>

        <section className="resume ">
          <h3 className='section__subtitle subtitle__center'>Educational Details</h3>

          <div className='resume__container grid'>
            <div className='resume__data'>
              {resume.map((val)=>{
                if(val.category === "Education"){
                  return<ResumeItem key={val.id} {...val}/>
                }
              })}
            </div> 

            <div className='resume__data'>
              {resume.map((val)=>{
                if(val.category === "Certification"){
                  return<ResumeItem key={val.id} {...val}/>
                }
              })}
            </div> 
          </div>
        </section>
      </div>
    </div>
  )
}

export default About