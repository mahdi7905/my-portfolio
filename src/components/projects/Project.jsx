import React from 'react'
import Github from '../svgs/Github'
import Eye from '../svgs/Eye'

const Project = ({project}) => {
  return (
    <div className='project-card'>
      <div className="projectTitle">
        <h3>{project.title}</h3>
      </div>
      <img src={project.media[0]} alt="project" className='projectImage' />
      <div className="projectDescription">
        {project.description}
      </div>
      <div className="viewProject">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Github/>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Eye/>
        </a>
      </div>
    </div>
  )
}

export default Project