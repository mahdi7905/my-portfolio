import React from 'react'
import './style.css'
import Download from '../svgs/Download'

const CvButton = () => {
  return (
    <div>
        <a 
        href="https://drive.google.com/file/d/1q0GwKLPftozZ-CIdQSvtrhY1PgtDUYzM/view?usp=drive_link" 
        target="_blank" 
        rel='noreferrer' 
        className='cv-button'
        >
          <span>Download CV</span>
          <Download/>
        </a>
    </div>
  )
}

export default CvButton