import React, { useState } from 'react'

import{
  FaEnvelopeOpen,FaPhoneSquareAlt,FaFacebookF,FaGithub,FaLinkedin,FaInstagram
} from "react-icons/fa"

import{FiSend} from "react-icons/fi"

import "./contact.css"


const Contact = () => {


  const [name, setname] = useState('')
  const [Message, setMessage] = useState('')
  const [Mail, setMail] = useState('')
  const [Subject, setSubject] = useState('')

  const messageSend=(e)=>{
    if(name,Message,Mail,Subject===''){
      alert("Mention Every detail properly")
      e.preventDefault()
    }else{
      alert("Message send sucessfully")
    }
  }
  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In  <span> Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Don't be Shy !
          </h3>
          <p className="contact__info">
            Feel free to get in touch with me .I am always open to discussing new projects,
            creative ideas or opportunities to be part of your visions. 
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
            <div>
            <span className='info__title'>Mail me</span>
            <h4 className='info__desc'> mk7367884@gmail.com</h4>
            </div>
            </div>


            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
            <span className='info__title'>Call me</span>
            <h4 className='info__desc'> +91 9262556583</h4>
            </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/manishkumar77" className="contact__social-link">
            <FaLinkedin/>
            </a>

            <a href="https://github.com/manish7367" className="contact__social-link">
            <FaGithub/>
            </a>

            <a href="https://www.instagram.com/dud_eforever/?next=%2F" className="contact__social-link">
            <FaInstagram/>
            </a>
          </div>
        </div>

      <form onSubmit={messageSend}>
        <div className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type='text'
               placeholder='Your Name'
               className='form__control'
               value={name}
               onChange={(e)=>setname(e.target.value)}
              />
            </div>

            <div className="form__input-div">
              <input type='mail'
               placeholder='Your Email'
               className='form__control'
               value={Mail}
               onChange={(e)=>setMail(e.target.value)}
              />
            </div>

            <div className="form__input-div">
              <input type='text'
               placeholder='Your Subject'
               className='form__control'
               value={Subject}
               onChange={(e)=>setSubject(e.target.value)}
              />
            </div>
          </div>

          <div className="form__input-div">
              <textarea placeholder="Your Message" className='form__control textarea' value={Message} onChange={(e)=>setMessage(e.target.value)}></textarea>
          </div>

          <button className='button'  type="submit">
            Send Message 
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
          
        </div>
        </form>
      </div>
    </section>
  )
}

export default Contact