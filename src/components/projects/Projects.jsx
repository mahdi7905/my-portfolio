import React from 'react'
import './style.css'
import Project from './Project'
import { projects } from '../../projectData'

const Projects = () => {
  return (
    <>
    <h1 className='projects-header'>My Portfolio</h1>
    <div className='projects-container'>
      {
        projects.map((project) => <Project project={project}/>)
      }
    </div>
    </>
  )
}

export default Projects