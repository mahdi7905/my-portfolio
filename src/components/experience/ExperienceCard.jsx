import React from 'react'

const ExperienceCard = ({experience, duration}) => {
  return (
    <div className="experience-card">
        <h2>{experience}</h2>
        <h3>{`${duration}+ Years`}</h3>
    </div>
  )
}

export default ExperienceCard