import React from 'react'
import './style.css'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <div className='experience'>
        <ExperienceCard experience='UI/UX Design' duration='3'/>
        <ExperienceCard experience='Frontend Development' duration='3'/>
        <ExperienceCard experience='Mobile Development' duration='1'/>
        <ExperienceCard experience='Backend Development' duration='2'/>
        <ExperienceCard experience='3D Design' duration='7'/>
        <ExperienceCard experience='Graphics Design' duration='5'/>
        <ExperienceCard experience='Electronics' duration='3'/>
    </div>
  )
}

export default Experience