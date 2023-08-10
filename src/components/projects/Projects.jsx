import React from 'react'
import './style.css'
import Project from './Project'

const Projects = () => {
  return (
    <>
    <h1 className='projects-header'>My Projects</h1>
    <div className='projects-container'>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
    </div>
    </>
  )
}

export default Projects