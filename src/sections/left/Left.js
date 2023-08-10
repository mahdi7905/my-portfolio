import React from 'react'
import './left.css'
import LeftCard from '../../components/LeftCard/LeftCard'
import Socials from '../../components/Socials/Socials'
import Bio from '../../components/Bio/Bio'
import Skills from '../../components/skills/Skills'

const Left = () => {
  return (
    <div className='left'>
      <LeftCard/>
      <Bio/>
      <Skills/>
      <Socials/>
    </div>
  )
}

export default Left