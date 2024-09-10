import React from 'react'
import './style.css'
import Mail from '../svgs/Mail'
import Github from '../svgs/Github'
import Linkedin from '../svgs/Linkedin'
import image from '../../assets/me2.png'
import image2 from '../../assets/pic.jpg'

const BioCard = () => {
  return (
    <div className='bio-card'>
        <div className="image">
            <img src={image} alt="me" className='my-pic'/>
            <img src={image2} alt="me" className='my-pic2'/>
        </div>
        <div className="bio-content">
            <h1>Hi There!!!</h1>
            <div className='text-wrapper'>
                <h2>I am a </h2>
                <h2 className="swap">Full Stack Developer.</h2>
            </div>
            <div className='text-wrapper'>
                <h2>I am also a </h2>
                <h2 className="swap">Mobile Developer.</h2>
            </div>
            <div className="social-media">
              <a href="mailto:mawsoulmahady2015@gmail.com"><Mail/></a>
              <a href="https://www.linkedin.com/in/mahadi-mansur-480a03276/"><Linkedin/></a>
              <a href="https://github.com/mahdi7905"><Github/></a>
            </div>
            <a href="#contactArea" className='contactMe'>Contact Me</a>
        </div>
        
    </div>
  )
}

export default BioCard