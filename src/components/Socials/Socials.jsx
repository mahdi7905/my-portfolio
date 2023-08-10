import React from 'react'
import './Socials.css'
import Mail from '../svgs/Mail'
import Github from '../svgs/Github'
import Linkedin from '../svgs/Linkedin'

const Socials = () => {
  return (
    <div className='socials'>
      <a href="mailto:mawsoulmahady2015@gmail.com"><Mail/></a>
      <a href="https://www.linkedin.com/in/mahadi-mansur-480a03276/"><Linkedin/></a>
      <a href="https://github.com/mahdi7905"><Github/></a>
    </div>
  )
}

export default Socials