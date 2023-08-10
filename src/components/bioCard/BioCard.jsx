import React from 'react'
import './style.css'
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
                <h2 className="swap">Developer.</h2>
            </div>
            <a href="#contactArea" className='contactMe'>Contact Me</a>
        </div>
        
    </div>
  )
}

export default BioCard