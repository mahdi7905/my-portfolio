import React from 'react'

const ServiceCard = ({title, description}) => {
  return (
    <div className='service'>
        <h1>{title}</h1>
        <p>{`${description}`}</p>
    </div>
  )
}

export default ServiceCard