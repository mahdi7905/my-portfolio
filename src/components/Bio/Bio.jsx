import React from 'react'
import './style.css'
import Pin from '../svgs/Pin'
import Phone from '../svgs/Phone'
const Bio = () => {
  return (
    <div className='bio'>
      <div className="bioContent">
        <Pin/>
        <span>Kaduna, NG</span>
      </div>
      <div className="bioContent">
        <Phone/>
        <span>+2347068881021</span>
      </div>
        <hr />
    </div>
  )
}

export default Bio