import React from 'react'
import './LeftCard.css'
import Catalogue from '../svgs/Catalogue'
import CvButton from '../cvButton/CvButton'
const LeftCard = () => {
  return (
    <div className='left-card'>
      <Catalogue/>
      <h4 className='myName'>Mahadi Mansur</h4>
      <p className='core'>Scientific Officer 2 at RMRDC</p>
      <p className='core'>Full Stack Developer</p>
      <p className='core'>Mobile Developer (React Native)</p>
      <CvButton/>
    </div>
  )
}

export default LeftCard