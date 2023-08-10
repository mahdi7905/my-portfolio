import React from 'react'
import sampleImage from '../../assets/sample.png'
import Github from '../svgs/Github'
import Eye from '../svgs/Eye'

const Project = () => {
  return (
    <div className='project-card'>
      <div className="projectTitle">
        <h3>Project Title</h3>
      </div>
      <img src={sampleImage} alt="project" className='projectImage' />
      
      <div className="projectDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deserunt aperiam corporis exercitationem aut quam, 
        recusandae animi quo autem blanditiis quaerat.
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