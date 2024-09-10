import React from 'react'
import './style.css'
import Meter from './Meter'
const Skills = () => {
  return (
    <div className='skills'>
      <h1>My Skills</h1>
      <div className="skills-container">
        <Meter skill='html' reading={90}/>
        <Meter skill='css' reading={80}/>
        <Meter skill='javascript' reading={80}/>
        <Meter skill='React' reading={80}/>
        <Meter skill='React Native' reading={80}/>
        <Meter skill='nodeJS' reading={70}/>
        <Meter skill='threeJS' reading={50}/>
        <Meter skill='MERN' reading={80}/>
        <Meter skill='python' reading={70}/>
        <Meter skill='django' reading={65}/>
        <Meter skill='figma' reading={70}/>
        <Meter skill='photoshop' reading={50}/>
        <Meter skill='blender' reading={80}/>
        <Meter skill='electronics' reading={60}/>
      </div>
    </div>
  )
}

export default Skills