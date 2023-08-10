import React from 'react'
import Graduation from '../svgs/Graduation'
import Cert from '../svgs/Cert'

const EduCard = ({title, durations, honor, role}) => {

    
    
  return (
    <div className='edu-info'>
        <span className='title'>
            <span>
              {
                role === "Second Class - Upper Honors"? <Graduation/> : <Cert/>
              }
              
              <h2>{title}</h2>
            </span>
            <h3>{durations}</h3>
        </span>
        <span className='honor'>
            <h2>{honor}</h2>
            <h3>{role}</h3>
        </span>
    </div>
  )
}

export default EduCard