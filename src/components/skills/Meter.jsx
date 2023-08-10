import React from 'react'

const Meter = ({skill, reading}) => {
  return (
     <div className="my-skills">
        <div className="skill">
            <span className='skill-container'>
                <span className='title'>{skill}</span>
                <span className='percentage'>{reading}%</span>
            </span>
            <span className="meter">
                <span className="meter-inner" style={{width: `${reading}%`}}></span>
            </span>
        </div>
    </div>
  )
}

export default Meter