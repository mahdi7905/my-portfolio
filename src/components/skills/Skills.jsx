import React from 'react'
import './style.css'
import Meter from './Meter'
const Skills = () => {
  return (
    <div className='skills'>
      <h1>My Skills</h1>
      <div className="skills-container">
        <Meter skill='javascript' reading={75}/>
        <Meter skill='python' reading={70}/>
        <Meter skill='mern' reading={70}/>
        <Meter skill='django' reading={65}/>
        <Meter skill='node' reading={70}/>
        <Meter skill='react' reading={80}/>
        <Meter skill='html' reading={90}/>
        <Meter skill='css' reading={80}/>
        <Meter skill='three' reading={50}/>
        <Meter skill='figma' reading={50}/>
        <Meter skill='photoshop' reading={50}/>
        <Meter skill='blender' reading={80}/>
        <Meter skill='electronics' reading={40}/>
      </div>
    </div>
  )
}

export default Skills