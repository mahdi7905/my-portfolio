import React from 'react'
import './style.css'
import LeftCard from '../../components/LeftCard/LeftCard'
import Skills from '../../components/skills/Skills'
import BioCard from '../../components/bioCard/BioCard'
import Experience from '../../components/experience/Experience'
import Education from '../../components/education/Education'
import Projects from '../../components/projects/Projects'
import Contact from '../../components/contact/Contact'
import Bio from '../../components/Bio/Bio'
import Services from '../../components/services/Services'

const FullWidth = () => {
  return (
    <div className='full-width'>
      <BioCard/>
      <LeftCard/>
      <Bio/>
      <Skills/>
      <Experience/>
      <Services/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default FullWidth