import React from 'react'
import './right.css'
import BioCard from '../../components/bioCard/BioCard'
import Experience from '../../components/experience/Experience'
import Services from '../../components/services/Services'
import Education from '../../components/education/Education'
import Projects from '../../components/projects/Projects'
import Contact from '../../components/contact/Contact'

const Right = () => {
  return (
    <div className='right'>
      <BioCard/>
      <Experience/>
      <Services/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Right